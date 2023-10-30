import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { logIn, oAuth, inSession } from "@/pages/hooks/server/server.hooks";
import { useState } from "react";
import Historial from "@/components/historialPaciantes";
import { sessionToken } from "../../public/lib/pocketbase";
import { Router, useRouter } from "next/router";
import NavbarSinsesion from "@/components/navbarSinsesion";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const reg = (data) => {
    logIn(data);
  };

  const [show, setShow] = useState(false)
  const [session, setSession] = useState(false)

  const router = useRouter();

  return (
    <main>
      {/* {session ? 'div 1' : <Navbar />  } */}
      {!session ? (
                <NavbarSinsesion/>
              ) : (<Navbar/>)}
        
      <section className="min-h-screen bg-[#DBE3FF] flex items-center justify-center">
        
        {/*     login container*/}
        <div className="bg-white flex max-w-6xl shadow-lg">
          {/*     form container*/}
          <div className="sm:w-1/2 p-5 px-16 mt-6 ">
            <h2 className="font-bold text-2xl text-center text-secondary">
              Login
            </h2>

            <form onSubmit={handleSubmit(reg)}  className="flex flex-col gap-4">
              <label htmlFor="logIn-name">
                <h1>Email</h1>
                <input
                  className="p-2 input input-sm px-10 mt-4"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("username")}
                 
                />
              </label>
              <label htmlFor="logIn-pass">
                <h1>Contraseña</h1>
                <input
                  className="p-2 input input-sm mt-4 px-10"
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
              
                />
              </label>
              <button
                type="submit"
                className="btn btn-secondary border-none text-base-100"
                onClick={() => setSession(inSession() && router.push('/'))}
              >
                Login
                {/* Login {session ? 'div 1' : 'div 2'} */}
              </button>
              {!session ? (
                <div className="bg-red-200">div 2
                <h1>no esta en sesion</h1>
                </div>
              ) : (<div className="bg-blue-400">div 1
              <h1>estas en sesion</h1>
              </div>)
              // router.push('/');
            }
            </form>
          </div>
          {/*     image container*/}
          <div className="w-1/2 sm:block hidden">
           
            <img className="object-scale-down" src="/imgLogin.jpg" alt="ola" />
          </div>
        </div>

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
