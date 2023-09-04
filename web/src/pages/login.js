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
                <div className="bg-secondary w-100 p-10">
                    <h1>Login</h1>
                    <div>
                        <form onSubmit={handleSubmit(reg)}>
                            <label htmlFor="logIn-name"> Usuario: <input id='logIn-username' type='text' placeholder='Nombre' {...register("username")}/> </label>
                            <label htmlFor="logIn-name"> Nombre: <input id='logIn-name' type='text' placeholder='Nombre' {...register("name")}/> </label>
                            <label htmlFor="logIn-surName"> Apellido: <input id='logIn-surName' type='text' placeholder='Apellido' {...register("surName")}/> </label>
                            <label htmlFor="logIn-mail"> Mail: <input id='logIn-mail' type="email" placeholder='Mail' {...register("email")}/> </label>
                            <label htmlFor="logIn-pass"> Contraseña: <input id='logIn-pass' type='password' placeholder='********' {...register("password")}/> </label>
                            <label htmlFor="logIn-passCo"> Confirmar Contraseña: <input id='logIn-passCo' type='password' placeholder='********' {...register("passwordConfirm")}/> </label>
                            <button type='submit'>Registrarse</button>
                        </form>
                    </div>
                </div>
        </main>
    )
}