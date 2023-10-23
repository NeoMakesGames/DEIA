import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { logIn, oAuth } from "@/pages/hooks/server/server.hooks";
import { inSession } from "@/pages/hooks/server/server.hooks";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const reg = (data) => {
    logIn(data);
  };


  return (
    <main>
      {/* <Navbar /> */}
      <section className="min-h-screen bg-base-300 flex items-center justify-center">
        <h1> ESTA ES UNA PRUEBA</h1>
        {/*     login container*/}
        <div className="bg-base-100 flex max-w-6xl shadow-lg">
          {/*     form container*/}
          <div className="sm:w-1/2 p-5 px-16 mt-6 ">
            <h2 className="font-bold text-2xl text-center text-secondary">
              Login
            </h2>

            <form onSubmit={handleSubmit(reg)}  className="flex flex-col gap-4">
              <label htmlFor="logIn-name">
                <h1>Email</h1>
                <input
                  className="p-2 input input-sm px-10 mt-8"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("username")}
                 
                />
              </label>
              <label htmlFor="logIn-pass">
                <h1>Contraseña</h1>
                <input
                  className="p-2 input input-sm px-10"
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
              
                />
              </label>
              <button
                type="submit"
                className="btn bg-secondary border-none text-base-100"
              >
                Login
              </button>
            </form>
          </div>
          {/*     image container*/}
          <div className="w-1/2 sm:block hidden">
            <div className="bg-gradient-to-t from-black to-transparent z-10">
              Deia
            </div>
            <img className="object-scale-down" src="/imgLogin.jpg" alt="ola" />
          </div>
        </div>

        <button onClick={inSession}>sessionTokenprueba</button>
      </section>
    </main>
  );
}
{
  /* // <div className=" min-h-screen p-40 bg-base-300 ">
//     <div className=" container mx-auto " >
//         <div className="flex w-8/12 rounded-xl mx-auto bg-neutral shadow-xl">

//      <div className="w-1/2">

//     </div>

//     <div>
//         <form onSubmit={handleSubmit(reg)} className="grid grid-col-1 place-items-center justify-self-center text-primary-500">
//             <h1 className="p-6 font-mono font-bold text-4xl text-center text-yellow-500 ">Sign up</h1>
//             <label htmlFor="logIn-name"> Usuario: <br/> <input id='logIn-username' type='text' placeholder='Usuario' className="input p-1 max-w-fit " {...register("username")}/> </label>
//             <label htmlFor="logIn-pass"> Contraseña: <br/><input id='logIn-pass' type='password' placeholder='********' className="input p-1 w-fit"{...register("password")}/> </label>
//             <button type='submit' className="btn btn-lg m-4">Ingresar</button>
//         </form>
//         <a href="" className="text-primary">Eres representante de una insitucion?</a>
//         <button onClick={() => oAuth("google")} className="btn">GOOGLE</button>
//     </div>
//         </div>
//     </div> */
}
