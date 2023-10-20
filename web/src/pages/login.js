import Navbar from "@/components/navbar"
import { useForm } from "react-hook-form";
import { logIn, oAuth } from "@/pages/hooks/server/server.hooks";

export default function Login(){

    const {register, handleSubmit} = useForm();

    const reg = (data) => {
        logIn(data);
    }

    return(
        <main>
            <Navbar/>
                <div className="min-h-screen flex items-center justify-center bg-base-300">
                    <div className=" py-10 px-20 w-96">
                        <div className="bg-red-400 p-4  "></div>
                    </div>
                </div>
        </main>
    )
}
                // <div className=" min-h-screen p-40 bg-base-300 ">
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
                //     </div>