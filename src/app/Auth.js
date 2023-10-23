import pb from '../lib/pocketbase.js';
//import {useForm} from "react-hook-form";
//import {useState} from "react";
export default function auth() {
    
    //const [logged, setLogged] = useState(pb.authStore.isValid);
    
    return (
    <>
    <form>
        <label for="logIn-name"> Nombre: <input id='logIn-name' type='text' placeholder='Nombre'/> </label>
        <label for="logIn-surName"> Apellido: <input id='logIn-surName' type='text' placeholder='Apellido'/> </label>
        <label for="logIn-mail"> Mail: <input id='logIn-mail' type="email" placeholder='Mail'/> </label>
        <label for="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********'/> </label>
        <label for="logIn-passCo"> Confirmar Contraseña: <input id='logIn-passCo' type='password' placeholder='********'/> </label>

        <button type='submit'>Registrarse</button>
    </form>
    </>

    )}