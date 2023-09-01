import Navbar from "@/components/navbar"
import registerForm from "@/hooks/client/register"
import { useForm } from "react-hook-form";
export default function Login(){
    return(
        <main>
            <Navbar/>
                <div className="bg-secondary w-100 p-10">
            {/* <h1>Login</h1> */}
            <registerForm />
            
                </div>
        </main>
    )
}