import { user, sessionToken } from "../../../../public/lib/pocketbase";
import pb from  "@/../public/lib/pocketbase.js";

//
//Funciones del AUTH.
//

function inSession() {
    console.log(sessionToken);
    if(sessionToken !== "")
    {
        console.log("esta en sesion");
        return true;
    }
    console.log("no esta en sesion");
    return false;
}
//es recontra inseguro y funciona. Por ahora no se rompe.

async function reGister(userdata) {
    try{
        await pb.collection('med').create(userdata);
        //Crea un nuevo registro.
        await pb.collection("med").authWithPassword(userdata.username, userdata.password);
        //Logea y devuelve el usuario en conjunto con un token de auth.
    }catch(e)
    {
        console.log(e.response);
        //catchea el error, devuelve al front algo para transmitir al usuario.
    } 
}

async function logIn (userdata) {
    try{
        await pb.collection("med").authWithPassword(userdata.username, userdata.password); 
        //Logea y devuelve el usuario en conjunto con un token de auth.
    }
    catch(e)
    {
        console.log(e);
        //catchea el error, devuelve al front algo para transmiir al usuario.
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
}

async function logOut() {
    await pb.authStore.clear();
    //Elimina el token de auth del browser.
};

async function deleteAccount() {
    try
    {
        const del = await pb.collection('adm').delete(pb.authStore.model.id);
        //Elimina el registro de la tabla, cuyo id coincida con el del modelo del auth.
    }
    catch(e)
    {
        console.error(e);
    }
};

//
// Busquda de datos en las tablas.
//

async function lookForEsp() {
    const records = await pb.collection('esp').getFullList();
    //Devuelve todos los registros de la tabla de espirometrias.
    //La API de PB la modifique para que unicamente devuelva records que correspondan al id del medico logeado.
    return records
}

export {reGister, logIn, oAuth, logOut, deleteAccount, lookForEsp, inSession};
//Exporto todas las fuciones anteriores.