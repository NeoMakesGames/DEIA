"use client";
import pb from "@/lib/pocketbase";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const {register, handleSubmit} = useForm();
    async function reg (data){
        console.log(data);
        const record = await pb.collection("users").create(data);
        console.log(pb.authStore.isValid);
    }

    return (

    <>
    <form onSubmit={handleSubmit(reg)}>
        <label htmlFor="logIn-name"> Usuario: <input id='logIn-username' type='text' placeholder='Nombre' {...register("username")}/> </label>
        <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("password")}/> </label>
        <button type='submit'>logIn</button>
    </form>
    </>
    
    )}