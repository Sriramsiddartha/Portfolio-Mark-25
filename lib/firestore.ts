// lib/firestore.ts
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import type { 
  Project, 
  Certificate, 
  Hackathon, 
  Experience, 
  Education, 
  SiteContent 
} from "./data";

// ─── Projects ────────────────────────────────────────────────────────────────

export async function fetchProjects(): Promise<Project[]> {
  const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Project));
}

export async function addProject(data: Omit<Project, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "projects"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateProject(id: string, data: Partial<Project>): Promise<void> {
  await updateDoc(doc(db, "projects", id), data);
}

export async function deleteProject(id: string): Promise<void> {
  await deleteDoc(doc(db, "projects", id));
}

// ─── Certificates ─────────────────────────────────────────────────────────────

export async function fetchCertificates(): Promise<Certificate[]> {
  const q = query(collection(db, "certificates"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Certificate));
}

export async function addCertificate(data: Omit<Certificate, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "certificates"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateCertificate(id: string, data: Partial<Certificate>): Promise<void> {
  await updateDoc(doc(db, "certificates", id), data);
}

export async function deleteCertificate(id: string): Promise<void> {
  await deleteDoc(doc(db, "certificates", id));
}

// ─── Hackathons ─────────────────────────────────────────────────────────────

export async function fetchHackathons(): Promise<Hackathon[]> {
  const snap = await getDocs(query(collection(db, "hackathons"), orderBy("createdAt", "desc")));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Hackathon));
}

export async function addHackathon(data: Omit<Hackathon, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "hackathons"), { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

export async function updateHackathon(id: string, data: Partial<Hackathon>): Promise<void> {
  await updateDoc(doc(db, "hackathons", id), data);
}

export async function deleteHackathon(id: string): Promise<void> {
  await deleteDoc(doc(db, "hackathons", id));
}

// ─── Experience ─────────────────────────────────────────────────────────────

export async function fetchExperience(): Promise<Experience[]> {
  const snap = await getDocs(query(collection(db, "experience"), orderBy("createdAt", "desc")));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Experience));
}

export async function addExperience(data: Omit<Experience, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "experience"), { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

export async function deleteExperience(id: string): Promise<void> {
  await deleteDoc(doc(db, "experience", id));
}

// ─── Education ─────────────────────────────────────────────────────────────

export async function fetchEducation(): Promise<Education[]> {
  const snap = await getDocs(query(collection(db, "education"), orderBy("createdAt", "desc")));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Education));
}

export async function addEducation(data: Omit<Education, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "education"), { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

export async function deleteEducation(id: string): Promise<void> {
  await deleteDoc(doc(db, "education", id));
}

// ─── Site Content (Singleton) ─────────────────────────────────────────────────

export async function fetchSiteContent(): Promise<SiteContent | null> {
  const snap = await getDoc(doc(db, "siteContent", "global"));
  if (snap.exists()) {
    return { id: snap.id, ...snap.data() } as SiteContent;
  }
  return null;
}

export async function updateSiteContent(data: Partial<SiteContent>): Promise<void> {
  await setDoc(doc(db, "siteContent", "global"), data, { merge: true });
}
