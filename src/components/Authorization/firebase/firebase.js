import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBC3gfZhdZ-86TIiMlXGo8fqfmuNXHFwsg",
    authDomain: "trikmap-c997c.firebaseapp.com",
    projectId: "trikmap-c997c",
    storageBucket: "trikmap-c997c.appspot.com",
    messagingSenderId: "761319112010",
    appId: "1:761319112010:web:94a4d0526becc96ae795b3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export function useAuthh() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}
export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {photoURL});

    setLoading(false);
    alert("Uploaded file!");
}
