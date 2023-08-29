"use client";
import pb from "../../lib/pocketbase";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const {register, handleSubmit} = useForm();
    async function sUp (data){
        const record = await pb.collection(users).authWithPassword(data);
        console.log(pb.authStore.isValid);
    }

    return (

    <>
    <form onSubmit={handleSubmit(sUp)}>
        <label htmlFor="logIn-name"> Usuario: <input id='logIn-username' type='text' placeholder='Nombre' {...register("username")}/> </label>
        <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("password")}/> </label>
        <button type='submit'>Iniciar sesion</button>
    </form>
    </>
    
    )}