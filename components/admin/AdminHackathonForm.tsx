import { useState } from "react";
import { uploadImage } from "@/lib/storage";
import type { Hackathon } from "@/lib/data";

export default function AdminHackathonForm({ onAdded }: { onAdded: (h: Hackathon) => void }) {
  const [data, setData] = useState({
    title: "",
    role: "",
    date: "",
    description: "",
    image: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileKey, setFileKey] = useState(Date.now());
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imageUrl = data.image.trim();
      if (file) {
        try {
          imageUrl = await uploadImage(file, "projects"); // upload to projects folder in storage
        } catch (storageErr) {
          console.error(storageErr);
          alert("Firebase Storage Error: Failed to upload the image file. Ensure Firebase Storage is enabled.");
          setSaving(false);
          return;
        }
      }

      const { addHackathon } = await import("@/lib/firestore");
      const cleanData = {
        title: data.title.trim(),
        role: data.role.trim(),
        date: data.date.trim(),
        description: data.description.trim(),
        image: imageUrl || undefined
      };
      
      const id = await addHackathon(cleanData as any);
      onAdded({ id, ...cleanData });
      setData({ title: "", role: "", date: "", description: "", image: "" });
      setFile(null);
      setFileKey(Date.now());
    } catch {
      alert("Failed to add hackathon.");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="font-headline font-bold text-xl text-coffee-brown mb-2 text-center">Add Hackathon</h2>
      
      <input required name="title" placeholder="Event Name" value={data.title} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <div className="grid grid-cols-2 gap-4">
        <input required name="role" placeholder="Role (e.g. Participant)" value={data.role} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
        <input required name="date" placeholder="Date (e.g. Nov 2024)" value={data.date} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      </div>
      <textarea required name="description" placeholder="Description / Project Built" rows={3} value={data.description} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      
      <div>
        <label className="admin-label block mb-1">Upload Hackathon Image File</label>
        <input 
          key={fileKey}
          type="file" 
          accept="image/*"
          className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" 
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }} 
        />
        <p className="text-[10px] text-on-surface-variant/50 mt-1">Or, paste an image URL below instead:</p>
      </div>

      <input name="image" placeholder="Image URL (Optional)" value={data.image} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />

      <button type="submit" disabled={saving} className="mt-2 bg-coffee-brown text-soft-cream rounded-full py-3 font-label text-sm uppercase tracking-widest transition-all">
        {saving ? "Uploading & Adding..." : "Add Hackathon"}
      </button>
    </form>
  );
}
