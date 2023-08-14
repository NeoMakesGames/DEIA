"use client";
import { useState } from 'react';
import pb from '../../lib/pocketbase.js';
import { useForm, SubmitHandler } from "react-hook-form"

  export default function Reg() {

    const {register, handleSubmit} = useForm();

    async function reg(data)
    {
      console.log(data);
      try{
        console.log(pb);
        const authData = await pb.collection('users').authWithPassword( "567890", "1234567890");
        console.log(pb.authStore.isValid);
        //const record = await pb.collection("Users").create(data);
      }catch(e){
        console.log(e);
      }
    }

    return (

    <>
    <form onSubmit={handleSubmit(reg)}>
        <label htmlFor="logIn-name"> Nombre: <input id='logIn-name' type='text' placeholder='Nombre' {...register("name")}/> </label>
        <label htmlFor="logIn-surName"> Apellido: <input id='logIn-surName' type='text' placeholder='Apellido' {...register("surName")}/> </label>
        <label htmlFor="logIn-mail"> Mail: <input id='logIn-mail' type="email" placeholder='Mail' {...register("mail")}/> </label>
        <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("pass")}/> </label>
        <label htmlFor="logIn-passCo"> Confirmar Contraseña: <input id='logIn-passCo' type='password' placeholder='********' {...register("coPass")}/> </label>
        <button type='submit'>Registrarse</button>
    </form>
    </>

    )}