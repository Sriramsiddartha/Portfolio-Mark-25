"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/storage";
import { addCertificate } from "@/lib/firestore";
import type { Certificate } from "@/lib/data";

interface Props {
  onAdded: (cert: Certificate) => void;
}

const EMPTY = { title: "", issuer: "", date: "", image: "" };

export default function AdminCertForm({ onAdded }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [file, setFile] = useState<File | null>(null);
  const [fileKey, setFileKey] = useState(Date.now());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { setError("Title is required"); return; }
    setLoading(true); setError(""); setSuccess("");

    try {
      let imageUrl = form.image;
      if (file) {
        try {
          imageUrl = await uploadImage(file, "certificates");
        } catch (storageErr: any) {
          console.error(storageErr);
          throw new Error("storage-failed: " + (storageErr.message || "Unknown error"));
        }
      }

      const data = {
        title: form.title,
        issuer: form.issuer,
        image: imageUrl,
        date: form.date || new Date().getFullYear().toString(),
      };
      
      const id = await addCertificate(data);
      onAdded({ id, ...data });
      setForm(EMPTY);
      setFile(null);
      setFileKey(Date.now());
      setSuccess("Certificate added successfully!");
    } catch (err: any) {
      if (err.message && err.message.includes("storage-failed")) {
        setError("Firebase Storage Error: Failed to upload the image file. Ensure Firebase Storage is enabled in your Firebase Console and that the Rules allow reads/writes.");
      } else if (err.message && err.message.includes("offline")) {
        setError("Database Error: Client is offline. Your computer might be offline, or Firebase Firestore is not enabled (Step 2) for this project.");
      } else {
        setError("Failed to add certificate. Ensure Firestore is running in Test Mode.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-headline font-bold text-lg text-coffee-brown mb-4">Add New Certificate</h3>

      {error && <p className="text-xs text-error bg-error/10 px-4 py-2 rounded-lg">{error}</p>}
      {success && <p className="text-xs text-green-700 bg-green-50 px-4 py-2 rounded-lg">{success}</p>}

      <div>
        <label className="admin-label">Certificate Title *</label>
        <input className="admin-input" placeholder="e.g. AWS Cloud Practitioner" value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Issuing Organization</label>
          <input className="admin-input" placeholder="e.g. Amazon Web Services" value={form.issuer} onChange={e => setForm(f => ({...f, issuer: e.target.value}))} />
        </div>
        <div>
          <label className="admin-label">Year</label>
          <input className="admin-input" placeholder="2025" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))} />
        </div>
      </div>

      <div>
        <label className="admin-label">Upload Certificate Image File</label>
        <input 
          key={fileKey}
          type="file" 
          accept="image/*"
          className="admin-input" 
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }} 
        />
        <p className="text-[10px] text-on-surface-variant/50 mt-1">Or, paste a public image URL below instead:</p>
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
        {loading ? "Uploading & Adding..." : "Add Certificate"}
      </button>
    </form>
  );
}
