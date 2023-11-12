import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { logIn, oAuth} from "./hooks/server.hooks";
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

      <section className="min-h-screen bg-white flex items-center justify-center overflow-y-auto">
        {/*     login container*/}
        {/* <div className="bg-white flex w-screen  shadow-lg rounded-lg "> */}
          {/*     form container*/}
          <div className="sm:w-1/2 p-5 px-10 mx-6 border-4 h-screen">
            <h2 className="font-bold text-2xl text-center text-secondary mt-4 mb-6">
              Login
            </h2>

            <form onSubmit={handleSubmit(reg)} className="flex justify-center items-center flex-col gap-5">
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
                <div className="py-4 form-control">
              <label className=" label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Ingrese email"
                {...register("username")}
                className=" input w-full p-2 border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ></input>
            </div>

              {/*   PASSWORD */}
              <div className="py-4 form-control">
              <label className=" label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Ingrese contraseña"
                {...register("password")}
                className=" input w-full   p-2  border-b border-gray-300  border-inherit focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
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
          <div className="w-1/2 sm:block hidden flex justify-center items-center relative">
            <img
              className="object-scale-down w-[500px] px-4 py-2 z-10"
              src="/imgLOGINnueva.png"
              alt="ola"
            />
            <h1 className="absolute top-[290px]   left-[100px] transform -translate-x-1/2 -translate-y-1/2 text-4xl text-blue-500 font-bold  p-4">
              DEIA
            </h1>
            <h1 className="absolute top-[330px]   left-[70px] transform -translate-x-1/2 -translate-y-1/2 text-xs text-blue-500 font-thin  p-4">
              Diagnostico de Estirometria con Inteligencia Artificial
            </h1>
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
