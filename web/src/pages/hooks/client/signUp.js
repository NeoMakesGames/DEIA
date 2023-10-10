"use client";
import pb from "@/../public/lib/pocketbase.js";
import { useForm } from "react-hook-form";

export default logInForm = () => {

    const {register, handleSubmit} = useForm();
    
    async function sUp (data){
        const record = await pb.collection(users).authWithPassword(data);
    }

    (async() => {
        var select = document.getElementById("inst");
        const institutions = await pb.collection('Instituciones').getFullList({ fields:"institutioName"})
        
        for(var i = 0; i < institutions.length; i++) {
            var opt = institutions[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);        
        }

        })();

    return (

    <>
    <form onSubmit={handleSubmit(sUp)}>
        <label htmlFor="logIn-name"> Usuario: <input id='logIn-username' type='text' placeholder='Nombre' {...register("username")}/> </label>
        <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("password")}/> </label>
        <select id="inst">
            <option value=""></option>
        </select>
        <button type='submit'>Iniciar sesion</button>
    </form>
    </>
    
    )}