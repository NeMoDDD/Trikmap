// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDocs,  orderBy,startAfter,where, collection, getFirestore,doc,setDoc,getDoc, addDoc, onSnapshot, limit,query} from "@firebase/firestore";  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBonj03by4roWxY0N6Byi6gY36TKc81qKY",
  authDomain: "trikmap-39edf.firebaseapp.com",
  projectId: "trikmap-39edf",
  storageBucket: "trikmap-39edf.appspot.com",
  messagingSenderId: "734921073378",
  appId: "1:734921073378:web:e8bd0343e16da37dc4f4bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)  
export const firestore = getFirestore()
const some  = doc(firestore, 'Hotels/hNYXI4X7eZvWEVQrZTIH')  
const ref  = collection(db, 'Hotels') 
console.log(some)

// function write ( ){ 
//     const data = { 
//         subtitile: 'meow'
//     }  
//     setDoc(some, data) перезаписывает все 
//    updateDoc(some, data) дополняет

// } 
// db.collection("Hotels").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })  
// async function addNewDoc(){ 
//     const newDoc = await addDoc(somes,{ 
//         customer: 'some' , 
//         driom: 'latte'
//     })  
//     console.log(newDoc.path, 'ready');
// }  
// addNewDoc()
// async function readASinghDoc(){ 
//     const snapshot = await getDoc(some) 
//     if(snapshot.exists()){ 
//         const data = snapshot.data() 
//         console.log(data)
//     }
// } //для чтения данных, просто читает
// function listenToDoc() { 
//     onSnapshot(some, doc=>{ 
//         if(doc.exists()){ 
//             const docs = doc.data() 
//             console.log(docs)
//         }
//     })
// } //для чтения данных, при изменении обновляет
// readASinghDoc() 
// listenToDoc() 
// async function queryDOc (){ 
//     const cusomer = query( 
//         collection(firestore, 'Hotels'), 
//         where('city', '==', 'Bishkek' ) ,
//         limit(10)          
//     )     
//     console.log(cusomer);

//     const  querySnap = await getDocs(cusomer)  
//     console.log(querySnap);
//     const alldocs = querySnap.forEach((snap) =>{  
    
//         console.log(snap.id, snap.data(),);
//     })
// }  


// queryDOc()  
// const queryRef = query(ref, orderBy('rating', limit(2))) 

// getDocs(queryRef)
//   .then(querySnapshot => {
//     // Получаем последний документ из текущей страницы
//     const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
//     // Создаем ссылку на следующую страницу, используя последний документ текущей страницы
//     const nextQuery = query(ref, orderBy('rating'), startAfter(lastVisible), limit(2));
    
//     // Обрабатываем полученные данные
//     querySnapshot.forEach(doc => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

  
  async function limited (log = false){ 
  

    const first = query(collection(db, "Hotels"), limit(2)); 
    const documentSnapshots = await getDocs(first); 
    const cityList = documentSnapshots.docs.map(doc => doc.data()); 
   
   
    console.log(documentSnapshots.length);
    console.log(cityList) 
    const nextQuery = query(ref,limit(2),orderBy('rating'), startAfter(cityList.length) ) 
    const lol = await getDocs(nextQuery) 
    const cityLists = lol.docs.map(doc => doc.data());
    // const next = query(collection(db, "Hotels"),
    // startAfter(documentSnapshots),
    // limit(2));  
    console.log('nextone', cityLists);
    
  

} 


limited()