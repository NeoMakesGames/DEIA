import PocketBase from 'pocketbase';
//import de module

const pb = new PocketBase('http://127.0.0.1:8090');
//conexion a la db

export const user = pb.authStore.model;
//Datos del user
export const sessionToken = pb.authStore.token;
//Token del auth

//console.log(user, sessionToken, pb)
//checkeo de que todo ok

export default pb;
//Export de la conexión.
//No me acuerdo pq se necesita exportar asi, investigar o Vigi.