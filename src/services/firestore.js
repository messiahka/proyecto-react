// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFKoNpiM8P1nD5kr30YH84W7OH0UKasQ",
  authDomain: "tuttita-burguers.firebaseapp.com",
  projectId: "tuttita-burguers",
  storageBucket: "tuttita-burguers.appspot.com",
  messagingSenderId: "463575267697",
  appId: "1:463575267697:web:6c25abe3d68f2e772d1ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)



//1. Traer todos los documentos
export default async function getItems() {
  //1.a Referenciamos nuestra colección
  const collectionProductsRef = collection(DB, "hamburguesas")
  //1.b Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(collectionProductsRef);
  
  const documentsData = documentSnapshot.docs.map( doc => {
    // let docDataWithId = doc.data();
    // docDataWithId.id = doc.id
    // return docDataWithId;
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  
  return documentsData;
}

//2. Traer un documento por ID
export async function getSingleItem(idParams) {
  

const docRef = doc(DB, "hamburguesas", idParams)

const docSnapshot = await getDoc(docRef);

return {
  ...docSnapshot.data(),
  id: docSnapshot.id
}


}
//3. Traer todos los documentos segun categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB,"hamburguesas");

  const queryCat = query(collectionRef, where("category", "==", categoryParams))

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return documentsData;
}
  //4, Enviar la orden a Firebase
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id
}

export async function exportArrayToFirestore() {
  const hamburguesas = [
    {
      id: 1,
      name: "Mini",
      price: 700,
      discount: "20%",
      imgurl: "/Imgs/Mini.png",
      description: "hamburguesa de carne",
      category: "standard",
      stock: 50
    },
    {
      id: 2,
      name: "Mini Con Queso",
      price: 800,
      discount: "25%",
      imgurl: "/Imgs/MiniconQueso.png",
      description: "hamburguesa de carne",
      category: "standard",
      stock: 50
    },
    {
      id: 3,
      name: "Familiar Clásica",
      price: 1000,
      imgurl: "/Imgs/ClasicaSimple.png",
      description: "hamburguesa de carne",
      category: "standard",
      stock: 50
    },
    {
      id: 4,
      name: "Familiar Doble",
      price: 1200,
      imgurl: "/Imgs/ClasicaDoble.png",
      description: "hamburguesa de carne",
      category: "standard",
      stock: 50
    },
    {
      id: 5,
      name: "Torre de Queso",
      price: 1200,
      imgurl: "/Imgs/FullCheddar.png",
      description: "hamburguesa de carne",
      category: "premium",
      stock: 30
    },
    {
      id: 6,
      name: "Bacon Extremo",
      price: 1200,
      imgurl: "/Imgs/BaconFull.png",
      description: "hamburguesa de carne",
      category: "premium",
      stock: 30 
    },
    {
      id: 7,
      name: "Tuttita Simple",
      price: 1200,
      imgurl: "/Imgs/TuttitaSimple.png",
      description: "hamburguesa de carne",
      category: "premium",
      stock: 30
    },
    {
      id: 8,
      name: "Tuttita Doble",
      price: 1500,
      imgurl: "/Imgs/TuttitaSuperDoble.png",
      description: "hamburguesa de carne",
      category: "premium",
      stock: 30
    },
    {
      id: 9,
      name: "Tuttita Triple",
      price: 1800,
      imgurl: "/Imgs/TuttitaSuperTriple.png",
      description: "hamburguesa de carne",
      category: "premium",
      stock: 30
    }
  ]

   const collectionRef = collection(DB, "hamburguesas")

  // for...of
  for (let item of hamburguesas) {
    item.index = item.id
    delete(item.id)
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento Creado, id:", docOrder.id )
  }
}