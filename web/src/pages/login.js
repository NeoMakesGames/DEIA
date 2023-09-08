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
                <div className=" min-h-screen p-40 bg-gradient-to-r from-red-900 to-yellow-100 ">
                    <div className=" container mx-auto " >
                        <div className="flex w-8/12 rounded-xl mx-auto bg-neutral shadow-xl">

                     <div className="w-1/2">   
                        <image src="LOGO.png"/>
                    </div>

                    {/* registro */}

                    <div>
                        <form onSubmit={handleSubmit(reg)} className="grid grid-col-1 place-items-center justify-self-center text-primary">
                            <h1 className="p-6 font-mono font-bold text-4xl text-center text-primary ">Sign up</h1>
                            <label htmlFor="logIn-name"> Usuario: <br/> <input id='logIn-username' type='text' placeholder='Nombre' className="input p-1 max-w-fit " {...register("username")}/> </label>
                            <label htmlFor="logIn-name"> Nombre: <br/><input id='logIn-name' type='text' placeholder='Nombre' className="input p-1 w-fit"{...register("name")}/> </label>
                            <label htmlFor="logIn-surName"> Apellido: <br/><input id='logIn-surName' type='text' placeholder='Apellido' className="input p-1 w-fit"{...register("surName")}/> </label>
                            <label htmlFor="logIn-mail"> Mail: <br/><input id='logIn-mail' type="email" placeholder='Mail' className="input p-1 w-fit"{...register("email")}/> </label>
                            <label htmlFor="logIn-pass"> Contraseña: <br/><input id='logIn-pass' type='password' placeholder='********' className="input p-1 w-fit"{...register("password")}/> </label>
                            <label htmlFor="logIn-passCo"> Confirmar Contraseña: <br/><input id='logIn-passCo' type='password' placeholder='********' className="input p-1 w-fit"{...register("passwordConfirm")}/> </label>
                            <button type='submit' className="btn btn-lg m-4">Registrarse</button>
                        </form>
                        <a href="" className="text-primary">Eres representante de una insitucion?</a>
                    </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}