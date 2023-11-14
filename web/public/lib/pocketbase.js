import PocketBase from 'pocketbase';
//import de module

const pb = new PocketBase('http://127.0.0.1:8090');
//conexion a la db

//export const user = pb.authStore.model;
//agarra el modelo de usuario --> no lo uso pq pb no tiene una funcion para eso y pq es ás facil setear otras cosas

export const inSession = pb.authStore.isValid;
//"inSession" checkea la existencia y validez del token de auth.
// -> la función de validación que falta en server.hooks.

export default pb;
//Export de la conexión a la db.