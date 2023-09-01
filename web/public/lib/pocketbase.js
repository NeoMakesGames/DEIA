import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

try{
    console.log("Conexion Establecida.");
}catch(e)
{
    console.log(e);
}