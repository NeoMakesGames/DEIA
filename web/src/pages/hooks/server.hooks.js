import pb, {user, userId} from '../../../public/lib/pocketbase';
const axios = require ('axios')

//
//Funciones del AUTH.
//

var abc = "";
async function register(userdata) {
        try{
//            user_existance = await pb.collection('med').getFirstListItem(username= '${userdata.username}'");
            //Busca si ya existe un registro con el mismo username.
            
//          if(!user_existance.status) //checkea
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

// async function getUser(id)
// {
//     try{
//         const record = await pb.collection('med').getOne(id);
//         return user;
//     }
//     catch{
//         return null;
//     }
// } no lo uso

async function logIn (userdata) {
    if(userdata.password !== "" && userdata.username !== "")
    {
        //user_existance = await pb.collection('med').getFirstListItem('username' == userdata.username);
        //if(user_existance === 200 || true)
        {       
            try{
                const record = await pb.collection("med").authWithPassword(userdata.username, userdata.password)
                //const username = record.record.username;
                localStorage.setItem("username", record.record.username);
                localStorage.setItem("id", record.record.id);
                return "ok"
                //Logea y devuelve el usuario en conjunto con un token de auth.
            }
            catch (e)
            {
                console.log(e);
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
        // console.log("No se ingreso usuario o contraseña.");
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
        localStorage.removeItem("username"); 
        //Elimina el token de auth y el local storage en genearl del browser.
        
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

const lista_esp = async() => {
    try{
        const list = await pb.collection('esp').getFullList({
            sort: '-created',
        });

        //Devuelve todos los registros de la tabla de espirometrias.
        //La API de PB la modifique para que unicamente devuelva records que correspondan al id del medico logeado.

        return list;
    }catch(e)

    {
        return "err_esp", e; //error 404, no se encontró o no existen
    }
}

async function lookEsp(id) {
    try{
        const record = await pb.collection('esp').getOne(id);
        return record;
    }
    catch(e)
    {
        console.log(e);
        return
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

    console.log("123");
    const res = await instance.post('http://localhost:8000/predict', prompts).then(
        (response) => {
            return response.data

            //Devuelve los resultados.

        }).catch((e) => {
            console.log(e)   
            return "err_post";

            //Devuelve si ocurre un error al 'enviar' los datos.

        });
    if(res === "err_post")
    {
        return res;
    }
    else {
    const espirometria_data = {
    
        "sexo": input.gender,
        "datos_personales": input.extraData,
        "nacimiento": input.birthday,
        "medico": localStorage.getItem("id"),
        "res_AI": JSON.stringify(res)[10], 

        //no son las mejores tecnicas de programación, pero funca y como el rtado siempre es {result:x}, debería funcionar en tods lo casos.

        "nombre_y_apellido": input.name,
        "FEV1_Value": input.FEV1Value,
        "FEV1_Pred": input.FEV1Pred,
        "FVC_Value": input.FVCValue,
        "FVC_Pred": input.FVCPred,

    }   
    try
    {
        const espiro = await pb.collection('esp').create(espirometria_data);

        //crea el registro de la espirometria en la db
        
        return espiro;

        //devuelve los resultados al front
    }
    catch(e)
    {
        console.log("id3:", userId);
        return "err_db";
    }
    }

}

export {register, logIn, logOut, deleteAccount, lista_esp, postAI, lookEsp};

//Exporto todas las fuciones anteriores.