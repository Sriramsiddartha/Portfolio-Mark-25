import { useState } from "react";
import type { Experience } from "@/lib/data";

export default function AdminExperienceForm({ onAdded }: { onAdded: (e: Experience) => void }) {
  const [data, setData] = useState({
    role: "",
    company: "",
    period: "",
    detail: "",
    certificateImage: ""
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { addExperience } = await import("@/lib/firestore");
      const cleanData = {
        role: data.role.trim(),
        company: data.company.trim(),
        period: data.period.trim(),
        detail: data.detail.trim(),
        certificateImage: data.certificateImage.trim() || undefined,
        projectsBuilt: []
      };
      
      const id = await addExperience(cleanData as any);
      onAdded({ id, ...cleanData });
      setData({ role: "", company: "", period: "", detail: "", certificateImage: "" });
    } catch {
      alert("Failed to add experience. Check Firebase config.");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="font-headline font-bold text-xl text-coffee-brown mb-2 text-center">Add Experience</h2>
      
      <input required name="role" placeholder="Role (e.g. Software Engineer)" value={data.role} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <input required name="company" placeholder="Company" value={data.company} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <input required name="period" placeholder="Period (e.g. Jun 2024 - Present)" value={data.period} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <textarea required name="detail" placeholder="Description Details" rows={3} value={data.detail} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <input name="certificateImage" placeholder="Certificate Image URL (Optional)" value={data.certificateImage} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />

      <button type="submit" disabled={saving} className="mt-2 bg-coffee-brown text-soft-cream rounded-full py-3 font-label text-sm uppercase tracking-widest transition-all">
        {saving ? "Adding..." : "Add Experience"}
      </button>
    </form>
  );
}
