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
                <div  className="place-content-center bg-current">
                    
                    <div  >
                        <form onSubmit={handleSubmit(reg)} className="grid grid-col-1 place-content-left bg-primary w-2/5">
                            <h1 className="p-4 ">Login</h1>
                            <label className="p-4 w-full max-w-2xl bg-transparent" htmlFor="logIn-name"> Usuario: <br/> <input id='logIn-username' type='text' placeholder='Nombre' className="input p-1 w-2/3" {...register("username")}/> </label>
                            <label className="p-4 w-full max-w-2xl bg-transparent" htmlFor="logIn-name"> Nombre: <br/><input id='logIn-name' type='text' placeholder='Nombre' className="input p-1 w-2/3"{...register("name")}/> </label>
                            <label className="p-4 w-full max-w-2xl bg-transparent" htmlFor="logIn-surName"> Apellido: <br/><input id='logIn-surName' type='text' placeholder='Apellido' className="input p-1 w-2/3"{...register("surName")}/> </label>
                            <label className="p-4 w-full max-w-2xl bg-transparent" htmlFor="logIn-mail"> Mail: <br/><input id='logIn-mail' type="email" placeholder='Mail' className="input p-1 w-2/3"{...register("email")}/> </label>
                            <label className="p-4 w-full max-w-2xl bg-transparent" htmlFor="logIn-pass"> Contraseña: <br/><input id='logIn-pass' type='password' placeholder='********' className="input p-1 w-2/3"{...register("password")}/> </label>
                            <label className="p-4 w-full max-w-2xl bg-transparent " htmlFor="logIn-passCo"> Confirmar Contraseña: <br/><input id='logIn-passCo' type='password' placeholder='********' className="input p-1 w-2/3"{...register("passwordConfirm")}/> </label>
                            <button type='submit' className="btn max-w-xs p-4">Registrarse</button>
                        </form>
                    </div>
                </div>
        </main>
    )
}