import { useState } from "react";
import type { Education } from "@/lib/data";

export default function AdminEducationForm({ onAdded }: { onAdded: (e: Education) => void }) {
  const [data, setData] = useState({
    degree: "",
    school: "",
    location: "",
    classOf: "",
    cgpa: "",
    details: ""
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { addEducation } = await import("@/lib/firestore");
      const cleanData = {
        degree: data.degree.trim(),
        school: data.school.trim(),
        location: data.location.trim(),
        classOf: data.classOf.trim(),
        cgpa: data.cgpa.trim(),
        details: data.details.trim()
      };
      
      const id = await addEducation(cleanData);
      onAdded({ id, ...cleanData });
      setData({ degree: "", school: "", location: "", classOf: "", cgpa: "", details: "" });
    } catch {
      alert("Failed to add education.");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="font-headline font-bold text-xl text-coffee-brown mb-2 text-center">Add Education</h2>
      
      <input required name="degree" placeholder="Degree (e.g. B.Tech CSE)" value={data.degree} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <input required name="school" placeholder="Institution Name" value={data.school} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      
      <div className="grid grid-cols-2 gap-4">
        <input required name="classOf" placeholder="Class Of (e.g. 2027)" value={data.classOf} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
        <input required name="cgpa" placeholder="CGPA" value={data.cgpa} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      </div>

      <input required name="location" placeholder="Location" value={data.location} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />
      <textarea required name="details" placeholder="Coursework / Details" rows={3} value={data.details} onChange={handleChange} className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm border border-outline-variant/30 outline-none w-full" />

      <button type="submit" disabled={saving} className="mt-2 bg-coffee-brown text-soft-cream rounded-full py-3 font-label text-sm uppercase tracking-widest transition-all">
        {saving ? "Adding..." : "Add Education"}
      </button>
    </form>
  );
}
