import { user, sessionToken } from "../../../public/lib/pocketbase";
import pb from  "@/../public/lib/pocketbase.js";

//
//Funciones del AUTH.
//

async function register(userdata) {
        try{
            user_existance = await pb.collection('med').getFirstListItem("username= '${userdata.username}'");
            //Busca si ya existe un registro con el mismo username.
            
            if(!user_existance.status) //checkea
            {
                await pb.collection('med').create(userdata);
                //Crea un nuevo registro.
                
                await pb.collection("med").authWithPassword(userdata.username, userdata.password);
                //Logea y devuelve el usuario en conjunto con un token de auth.

                return "ok";
            }
        }
        catch
        {
            return "err_user_existance";
            //catchea el error, devuelve al front algo para transmitir al usuario.
        } 
}

async function logIn (userdata) {
    if(userdata.password !== "" && userdata.username !== "")
    {
        //user_existance = await pb.collection('med').getFirstListItem('username' == userdata.username);
        //if(user_existance === 200 || true)
        {       
            try{
                await pb.collection("med").authWithPassword(userdata.username, userdata.password);
                return "ok";
                //Logea y devuelve el usuario en conjunto con un token de auth.
            }
            catch
            {
                return "err_pass"
                //catchea el error, devuelve al front algo para transmitir al usuario.
            }
        }
        //else
         {
            return "err_user_inexistance";
            //catchea el error, devuelve al front algo para transmitir al usuario.
         }
    }
    else
    {
        console.log("No se ingreso usuario o contraseña.");
        //catchea el error, devuelve al front algo para transmitir al usuario.
        return "err_input";
    }
}

// async function oAuth (providers)
// {
//     try{
//         const authData = await pb.collection('adm').authWithOAuth2({provider:{providers}, redirectUrl: "http://127.0.0.1:8090/api/oauth2-redirect" });
//     }
//     catch(e){
//         console.log(e);
//     }
//     //Nunca lo termine de implementar, ni funciona.
// }

async function logOut() {
    try{
        await pb.authStore.clear();
        //Elimina el token de auth del browser.
        
        return "ok";
    }
    catch
    {
        return "err";
    }
};

async function deleteAccount(medico) {
    try
    {
        const del = await pb.collection('med').delete(medico.id);
        //Elimina el registro de la tabla, cuyo id coincida con el del modelo del auth.

        return "ok";
    }
    catch
    {
                return "err_del"
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
    }catch
    {
        return "err_esp"; //error 404, no se encontró o no existen
    }
}


//
// Conexión con el server de IA
//

async function getAI(input){
    try{
        console.log(123)
        const resAI = $http.send({
            url:     "http://localhost:8000/predict",
            method:  "POST",
            body:
            {
                "FEV1Value": 1.41,
                "FEV1Pred": 70,
                "FVCValue": 2,
                "FVCPred": 83
            },
            headers: {"content-type": "application/json"},
            timeout: 5, 
        })
        console.log(resAI)
        return resAI;
    }
    catch(e)
    {
        console.log(e)
        return "err_AI";
    }
}

export {register, logIn, logOut, deleteAccount, lookForEsp, getAI};
//Exporto todas las fuciones anteriores.