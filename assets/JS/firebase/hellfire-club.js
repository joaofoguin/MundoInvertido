import app from "./app.js"
import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
//getFirestore --> pega o banco de dados; collection --> pega a coleção/setor a ser salvo no bd; addDoc --> adiciona um doc para collection

export async function subscribeToHellfireClub (subscription) {
    const db = getFirestore (app)
    const hellfireClubCollection = collection (db, 'hellfire-club')
    const docRef = await addDoc(hellfireClubCollection, subscription) //A função deve ser assincrona, pois não funcionaria o "await"
    return  docRef.id
}