"use client";
import { useState } from 'react';
import pb from '../../lib/pocketbase.js';
import { useForm, SubmitHandler } from "react-hook-form"

  export default function RegisterForm() {

    const {register, handleSubmit, watch, formState: {errors}} = useForm(Inputs);

    async function reg (data){
        console.log(data);
        const record = await pb.collection("users").create(data);
        console.log(pb.authStore.isValid);


    }

    return (

    <>
    <form onSubmit={handleSubmit(reg)}>
        <label htmlFor="logIn-name"> Usuario: <input id='logIn-username' type='text' placeholder='Nombre' {...register("username"), { required: "Name is required", min: 1, max: 32}}aria-invalid={errors.username ? true:false}/> </label>
        <label htmlFor="logIn-name"> Nombre: <input id='logIn-name' type='text' placeholder='Nombre' {...register("name"), { required: true, min:1, max: 32 }}/> </label>
        <label htmlFor="logIn-surName"> Apellido: <input id='logIn-surName' type='text' placeholder='Apellido' {...register("surName"), { required: true, min:1, max:48 }}/> </label>
        <label htmlFor="logIn-mail"> Mail: <input id='logIn-mail' type="email" placeholder='Mail' {...register("email"), { required: true, min:1, max: 64 }}/> </label>
        <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("password"), { required: true, min:10, max: 64 }}/> </label>
        <label htmlFor="logIn-passCo"> Confirmar Contraseña: <input id='logIn-passCo' type='password' placeholder='********' {...register("passwordConfirm"), { required: true, min:10, max:64}}/> </label>
        <button type='submit'>Registrarse</button>
    </form>
    </>

    )}