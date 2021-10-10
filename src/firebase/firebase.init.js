import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const InitializeAuthantication = () =>{
    initializeApp(firebaseConfig);
}
export default InitializeAuthantication;