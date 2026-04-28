import { useState, useEffect } from "react";
import { localSiteContent, type SiteContent } from "@/lib/data";

export default function AdminSiteContentForm() {
  const [data, setData] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const { fetchSiteContent } = await import("@/lib/firestore");
        const curr = await fetchSiteContent();
        if (curr) {
          setData(curr);
        } else {
          setData(localSiteContent);
        }
      } catch (err) {
        console.error(err);
        setData(localSiteContent);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    setSaving(true);
    try {
      const { updateSiteContent } = await import("@/lib/firestore");
      await updateSiteContent(data);
      alert("Site content updated successfully!");
    } catch (err) {
      alert("Failed to save site content. Check Firebase config.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-4">Loading content editor...</div>;
  if (!data) return <div className="p-4">Global content document not found. Ensure Firebase is fully configured.</div>;

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-4">
      <h2 className="font-headline font-bold text-xl text-coffee-brown mb-2 text-center">Site Content</h2>
      
      <div className="flex flex-col">
        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold mb-1 ml-2">Hero Name</label>
        <textarea
          required
          rows={2}
          value={data.heroName}
          onChange={(e) => setData({ ...data, heroName: e.target.value })}
          className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm text-coffee-brown border border-outline-variant/30 focus:border-primary/50 outline-none transition-colors shadow-inner w-full resize-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold mb-1 ml-2">Hero Subtitle</label>
        <textarea
          required
          rows={3}
          value={data.heroSubtitle}
          onChange={(e) => setData({ ...data, heroSubtitle: e.target.value })}
          className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm text-coffee-brown border border-outline-variant/30 focus:border-primary/50 outline-none transition-colors shadow-inner w-full resize-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold mb-1 ml-2">About Bio (paragraphs separated by double newline)</label>
        <textarea
          required
          rows={6}
          value={data.aboutBio.join("\n\n")}
          onChange={(e) => setData({ ...data, aboutBio: e.target.value.split("\n\n") })}
          className="bg-surface-container rounded-xl px-4 py-3 font-body text-sm text-coffee-brown border border-outline-variant/30 focus:border-primary/50 outline-none transition-colors shadow-inner w-full"
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="mt-2 bg-primary text-white rounded-full py-3 font-label text-sm uppercase tracking-widest transition-all shadow-warm-md hover:shadow-warm-lg disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
