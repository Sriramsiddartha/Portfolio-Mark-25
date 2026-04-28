// lib/storage.ts
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Uploads a file to Firebase Storage under the given path prefix.
 * Returns the public download URL.
 */
export async function uploadImage(file: File, folder: "projects" | "certificates"): Promise<string> {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storageRef = ref(storage, `${folder}/${timestamp}_${safeName}`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
}
