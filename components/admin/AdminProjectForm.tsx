"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/storage";
import { addProject } from "@/lib/firestore";
import type { Project } from "@/lib/data";

interface Props {
  onAdded: (project: Project) => void;
}

const EMPTY = {
  title: "", description: "", tech: "", github: "", demo: "", category: "AI / ML", image: "",
};

export default function AdminProjectForm({ onAdded }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { setError("Title is required"); return; }
    setLoading(true); setError(""); setSuccess("");

    try {
      const techArr = form.tech.split(",").map((t) => t.trim()).filter(Boolean);
      const data = {
        title: form.title,
        description: form.description,
        image: form.image,
        tech: techArr,
        github: form.github,
        demo: form.demo,
        category: form.category,
      };
      const id = await addProject(data);
      onAdded({ id, ...data });
      setForm(EMPTY);
      setSuccess("Project added successfully!");
    } catch (err: any) {
      if (err.message && err.message.includes("offline")) {
        setError("Database Error: Client is offline. Your computer might be offline, or Firebase Firestore is not enabled (Step 2).");
      } else {
        setError("Failed to add project. Ensure Firestore is running in Test Mode.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-headline font-bold text-lg text-coffee-brown mb-4">Add New Project</h3>

      {error && <p className="text-xs text-error bg-error/10 px-4 py-2 rounded-lg">{error}</p>}
      {success && <p className="text-xs text-green-700 bg-green-50 px-4 py-2 rounded-lg">{success}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Title *</label>
          <input className="admin-input" placeholder="e.g. Solar Storm Monitor" value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} />
        </div>
        <div>
          <label className="admin-label">Category</label>
          <select className="admin-input" value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}>
            <option>AI / ML</option>
            <option>AI / Space Tech</option>
            <option>Full Stack</option>
            <option>Data Science</option>
            <option>Research</option>
          </select>
        </div>
      </div>

      <div>
        <label className="admin-label">Description</label>
        <textarea className="admin-input min-h-[90px]" placeholder="What does this project do?" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} />
      </div>

      <div>
        <label className="admin-label">Tech Stack (comma-separated)</label>
        <input className="admin-input" placeholder="React, Python, FastAPI, LSTM" value={form.tech} onChange={e => setForm(f => ({...f, tech: e.target.value}))} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">GitHub URL</label>
          <input className="admin-input" placeholder="https://github.com/..." value={form.github} onChange={e => setForm(f => ({...f, github: e.target.value}))} />
        </div>
        <div>
          <label className="admin-label">Live Demo URL</label>
          <input className="admin-input" placeholder="https://..." value={form.demo} onChange={e => setForm(f => ({...f, demo: e.target.value}))} />
        </div>
      </div>

      <div>
        <label className="admin-label">Public Image URL (optional)</label>
        <input 
          className="admin-input" 
          placeholder="e.g. https://imgur.com/your-image.png" 
          value={form.image} 
          onChange={e => setForm(f => ({...f, image: e.target.value}))} 
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full bg-primary text-white font-label font-semibold text-sm uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50 shadow-warm-sm"
      >
        {loading ? "Adding..." : "Add Project"}
      </button>
    </form>
  );
}
