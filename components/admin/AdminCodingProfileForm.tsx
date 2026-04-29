"use client";

import { useState } from "react";
import type { CodingProfile } from "@/lib/data";

export default function AdminCodingProfileForm({ onAdded }: { onAdded: (cp: CodingProfile) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const platform = fd.get("platform") as string;
    const handle = fd.get("handle") as string;
    const stats = fd.get("stats") as string;
    const link = fd.get("link") as string;

    try {
      const { addCodingProfile } = await import("@/lib/firestore");
      const id = await addCodingProfile({ platform, handle, stats, link });
      onAdded({ id, platform, handle, stats, link });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      alert("Failed to add Coding Profile. Check Firebase permissions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-headline font-bold text-lg text-coffee-brown mb-4">Add Coding Profile</h3>
      
      <div>
        <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Platform</label>
        <select name="platform" required className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm">
          <option value="LeetCode">LeetCode</option>
          <option value="Codeforces">Codeforces</option>
          <option value="HackerRank">HackerRank</option>
          <option value="CodeChef">CodeChef</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Handle/Username</label>
        <input name="handle" required className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm" placeholder="e.g., Sriramsiddartha" />
      </div>

      <div>
        <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Stats/Summary</label>
        <input name="stats" required className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm" placeholder="e.g., 300+ Problems Solved" />
      </div>

      <div>
        <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Profile URL</label>
        <input name="link" type="url" required className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm" placeholder="https://leetcode.com/u/Sriramsiddartha/" />
      </div>

      <button type="submit" disabled={loading} className="w-full p-3 rounded-xl bg-coffee-brown text-white font-label tracking-widest uppercase text-xs hover:bg-coffee-brown/80 disabled:opacity-50 transition-colors shadow-warm-sm mt-2">
        {loading ? "Adding..." : "Add Profile"}
      </button>
    </form>
  );
}
