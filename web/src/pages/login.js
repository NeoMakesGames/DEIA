import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { logIn, oAuth, reGister } from "./hooks/server.hooks";
import { useState } from "react";
import Historial from "@/components/historialPaciantes";
import { Router, useRouter } from "next/router";
import NavbarSinsesion from "@/components/navbarSinsesion";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const reg = (data) => {
    logIn(data);
  };

  const [show, setShow] = useState(false);
  const [session, setSession] = useState(false);
  const [logInState, setState] = useState(""); //la idea con esto juli es que ñe asignes el valor de la funcion logIn(). devuelve ["ok", y diferentes "err_"], en base a eso deberia mandarte a la home, etc.

  const router = useRouter();

  return (
    <main>
      {/* {session ? 'div 1' : <Navbar />  } */}
      {!session ? <NavbarSinsesion /> : <Navbar />}

      <section className="min-h-fit bg-[#E6F0F4] flex items-center justify-center overflow-y-auto">
        {/*     login container*/}
        {/* <div className="bg-white flex w-screen  shadow-lg rounded-lg "> */}
        {/*     form container*/}
        <div className="flex items-center justify-start flex-col sm:w-1/2 space-y-8 h-screen py-36">

          <h2 className="font-bold text-4xl text-start text-secondary w-8/12">
            Login
          </h2>
          <form
            onSubmit={handleSubmit(reg)}
            className="flex justify-center items-center flex-col gap-5 w-8/12"
          >
            {/* <label htmlFor="logIn-name">
                <h1>Email</h1>
                <input
                  className="p-2 input input-sm px-10 mt-4"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("username")}
                 
                />
              </label> */}
            {/* EMAIL */}
            <div className="w-full form-control">
              <label className=" label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Ingrese email"
                {...register("username")}
                className="   w-full p-2 border-b-4 border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></input>
            </div>

            {/*   PASSWORD */}
            <div className="w-full  form-control">
              <label className=" label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Ingrese contraseña"
                {...register("password")}
                className="  w-full   p-2  border-b-4 border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></input>
            </div>
            {/* <label htmlFor="logIn-pass">
                <h1>Contraseña</h1>
                <input
                  className="p-2 input input-sm mt-4 px-10"
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
              
                />
              </label> */}

            <button
              type="submit"
              className="btn px-[128px] bg-blue-700 border-none text-base-100"
              onClick={() => setSession(reGister() /*&& router.push('/')*/)}
            >
              Login
              {/* Login {session ? 'div 1' : 'div 2'} */}
            </button>
            {/* {

                !session ? (
                  <div className="bg-red-200">
                    div 2<h1>no esta en sesion</h1>
                  </div>
                ) : (
                  <div className="bg-blue-400">
                    div 1<h1>estas en sesion</h1>
                  </div>
                )
                // router.push('/');
              } */}
          </form>
        </div>
        {/*     image container*/}
        <div className="w-1/2 sm:block hidden relative">
          <div className=" flex items-center justify-center p-4 mb-40">
            <div>

            <img
              className="object-scale-down w-[700px] transform translate-x-10 z-10"
              src="/imgLog.png"
              alt=""
              />
              </div>
          </div>
        </div>
        {/* </div> */}

        {/* <button className="btn" onClick={inSession}>sessionTokenprueba</button> */}
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
