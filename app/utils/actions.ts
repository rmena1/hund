import { FIREBASE_STORAGE, FIREBASE_AUTH } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileToBlob } from "./helpers";
import { updateProfile } from "firebase/auth";

export const uploadImage = async (image: any, path: string, name: string) => {
  const result = { statusResponse: true, error: "", url: "" };
  const blob = await fileToBlob(image);
  try {
    const storageRef = ref(FIREBASE_STORAGE, `${path}/${name}`);
    await uploadBytes(storageRef, blob);
    // get download url
    const url = await getDownloadURL(storageRef);
    result.url = url;
    return result;
  } catch (error: any) {
    result.statusResponse = false;
    result.error = error;
    return result;
  }
};

export const updateProfilePhoto = async (data: any) => {
  const result = { statusResponse: true, error: "" };
  const user = FIREBASE_AUTH.currentUser;
  try {
    if (user) {
      await updateProfile(user, data);
    }
  } catch (error: any) {
    result.statusResponse = false;
    result.error = error;
  }
  return result;
};
