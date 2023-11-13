import { user, sessionToken } from "../../../public/lib/pocketbase";
import pb from  "@/../public/lib/pocketbase.js";

//
//Funciones del AUTH.
//

// function inSession() {
//     //es recontra inseguro y funciona. Por ahora no se rompe.
//     if(sessionToken !== "")
//     {
//         console.log("esta en sesion");
//         return true;
//     }
//     console.log("no esta en sesion");
//     return false;
// }

async function reGister(userdata) {

        try{
            user_existance = await pb.collection('med').getFirstListItem("username= '${userdata.username}'");
            //Busca si ya existe un registro con el mismo username.
            
            if(!user_existance.status) //checkea
            {
                await pb.collection('med').create(userdata);
                //Crea un nuevo registro.
                
                await pb.collection("med").authWithPassword(userdata.username, userdata.password);
                //Logea y devuelve el usuario en conjunto con un token de auth.
            }
        }
        catch(e)
        {
            console.log("El usuario ya existe.");
            //catchea el error, devuelve al front algo para transmitir al usuario.
        } 
}

async function logIn (userdata) {
    if(userdata.password !== "" && userdata.username !== "")
    {
        //user_existance = await pb.collection('med').getFirstListItem('username' == userdata.username);
        //if(user_existance === 200)
        {       
            try{
                await pb.collection("med").authWithPassword(userdata.username, userdata.password); 
                //Logea y devuelve el usuario en conjunto con un token de auth.
            }
            catch(e)
            {
                console.log(e);
                return "Contraseña incorrecta."
                //catchea el error, devuelve al front algo para transmitir al usuario.
            }
        }
        // else
        // {
        //     console.log("El usuario no existe.");
        //     //catchea el error, devuelve al front algo para transmitir al usuario.
        //     return "El usuario no existe.";
        // }
    }
    else
    {
        console.log("No se ingreso usuario o contraseña.");
        //catchea el error, devuelve al front algo para transmitir al usuario.
        return "No se ingreso usuario o contraseña.";
    }
}

async function oAuth (providers)
{
    try{
        const authData = await pb.collection('adm').authWithOAuth2({provider:{providers}, redirectUrl: "http://127.0.0.1:8090/api/oauth2-redirect" });
    }
    catch(e){
        console.log(e);
    }
    //Nunca lo termine de implementar, ni funciona.
}

async function logOut() {
    await pb.authStore.clear();
    //Elimina el token de auth del browser.
};

async function deleteAccount(medico) {
    try
    {
        const del = await pb.collection('med').delete(medico.id);
        //Elimina el registro de la tabla, cuyo id coincida con el del modelo del auth.
    }
    catch(e)
    {
        console.error(e);
        return "No se ha logrado eliminar el registro correctamente"
    }
};

//
// Busquda de datos en las tablas.
//

async function lookForEsp() {
    try{
        const list = await pb.collection('esp').getFullList();
        //Devuelve todos los registros de la tabla de espirometrias.
        //La API de PB la modifique para que unicamente devuelva records que correspondan al id del medico logeado.
        return list;
    }catch(e)
    {
        throw(e);
    }
}

const espirometrias = lookForEsp();


export {reGister, logIn, oAuth, logOut, deleteAccount, lookForEsp};
//Exporto todas las fuciones anteriores.