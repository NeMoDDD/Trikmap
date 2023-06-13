import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {useEffect, useState, useCallback} from "react";

import {getFirestore} from "@firebase/firestore";   

//erbol 
const firebaseConfigBooking = {
  apiKey: "AIzaSyBonj03by4roWxY0N6Byi6gY36TKc81qKY",
  authDomain: "trikmap-39edf.firebaseapp.com",
  projectId: "trikmap-39edf",
  storageBucket: "trikmap-39edf.appspot.com",
  messagingSenderId: "734921073378",
  appId: "1:734921073378:web:e8bd0343e16da37dc4f4bb"
};

const booking = initializeApp(firebaseConfigBooking); 
export const db = getFirestore(booking)  


//beka 
const firebaseConfig = {
    apiKey: "AIzaSyBC3gfZhdZ-86TIiMlXGo8fqfmuNXHFwsg",
    authDomain: "trikmap-c997c.firebaseapp.com",
    projectId: "trikmap-c997c",
    storageBucket: "trikmap-c997c.appspot.com",
    messagingSenderId: "761319112010",
    appId: "1:761319112010:web:94a4d0526becc96ae795b3"
};
// const app = initializeApp(firebaseConfig);
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
const useLocalStorage = (key, initial) =>{
    const [storageValue, setStorageValue] = useState(() =>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initial
    })
    const setValue = useCallback((value) =>{
        setStorageValue(value)
        window.localStorage.setItem(key,JSON.stringify( value))
    }, [key])
}
export default useLocalStorage