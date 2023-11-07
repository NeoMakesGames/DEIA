import PocketBase from 'pocketbase';
//import de module

const pb = new PocketBase('http://127.0.0.1:8090');
//conexion a la db

export const user = pb.authStore.model;
//Datos del user

export const inSession = pb.authStore.isValid;
//"inSession" checkea la existencia y validez del token de auth.

//checkeo de que todo ok

export default pb;
//Export de la conexión a la db.