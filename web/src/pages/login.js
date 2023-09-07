import Navbar from "@/components/navbar"
import { useForm } from "react-hook-form";
import pb from  "@/../public/lib/pocketbase.js";
export default function Login(){

    const {register, handleSubmit} = useForm();

    async function reg (data){
        console.log(data);
        try{
            const record = await pb.collection("users").create(data);
        }catch(e)
        {
            console.log(e)
        }
    }

    return(
        <main>
            <Navbar/>
                <div className=" w-screen flex  h-screen bg-gradient-to-r from-secondary-900 to-secondary-100 ">
                    
                    <div className=" bg-neutral flex justify-center flex-auto mx-36" >
                        <form onSubmit={handleSubmit(reg)} className="grid grid-col-1 place-items-center justify-self-center grow md:grow-0 text-primary">
                            <h1 className="p-6 font-mono font-bold text-4xl text-center text-primary ">Sign up</h1>
                            <label htmlFor="logIn-name"> Usuario: <br/> <input id='logIn-username' type='text' placeholder='Nombre' className="input p-1 max-w-fit " {...register("username")}/> </label>
                            <label htmlFor="logIn-name"> Nombre: <br/><input id='logIn-name' type='text' placeholder='Nombre' className="input p-1 w-fit"{...register("name")}/> </label>
                            <label htmlFor="logIn-surName"> Apellido: <br/><input id='logIn-surName' type='text' placeholder='Apellido' className="input p-1 w-fit"{...register("surName")}/> </label>
                            <label htmlFor="logIn-mail"> Mail: <br/><input id='logIn-mail' type="email" placeholder='Mail' className="input p-1 w-fit"{...register("email")}/> </label>
                            <label htmlFor="logIn-pass"> Contraseña: <br/><input id='logIn-pass' type='password' placeholder='********' className="input p-1 w-fit"{...register("password")}/> </label>
                            <label htmlFor="logIn-passCo"> Confirmar Contraseña: <br/><input id='logIn-passCo' type='password' placeholder='********' className="input p-1 w-fit"{...register("passwordConfirm")}/> </label>
                            <button type='submit' className="btn btn-lg m-4">Registrarse</button>
                        </form>
                    </div>
                </div>
        </main>
    )
}