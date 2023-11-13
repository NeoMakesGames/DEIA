import pb, {user} from  "@/../public/lib/pocketbase.js";
const axios = require ('axios');

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
    }catch(e)

    {
        return "err_esp"; //error 404, no se encontró o no existen
    }
}


//
// Conexión con el server de IA.
//



async function postAI(input){

    const instance = axios.create({
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            //Le otorga a la url del servidor el permiso de acceder al de ia (cors).
        },
    });
            
    const prompts = {
        "FEV1Value": input.FEV1Value,
        "FEV1Pred": input.FEV1Pred,
        "FVCValue": input.FVCValue,
        "FVCPred": input.FVCPred,
    }
    //establece los valores del prompt.

    //Método POST al server de ia.
    const res = await instance.post('http://localhost:8000/predict', prompts).then(
        (response) => {
            return response.data
            //Devuelve los resultados.
        }).catch((e) => {
            console.log(e)   
            return "err_post";
            //Devuelve si ocurre un error al 'enviar' los datos.
        });

    console.log(res);  
    const espirometria_data= {
    
        "sexo": input.gender,
        "datos_personales": input.extraData,
        "nacimiento": input.birthday,
        "medico": user.id,
        "IA_res": res,
        "nombre_y_apellido": "aleeee",
        "FEV1_Value": input.FEV1Value,
        "FEV1_Pred": input.FEV1Pred,
        "FVC_Value": input.FVCValue,
        "FVC_Pred": input.FVCPred,

    }   
    try{
        await pb.collection('esp').create(espirometria_data);
    console.log("yipiee")}catch(e){console.log(e)}
    //crea el registro de la espirometria en la db

    return res;
    //devuelve los resultados al front
}

export {register, logIn, logOut, deleteAccount, lookForEsp, postAI};
//Exporto todas las fuciones anteriores.