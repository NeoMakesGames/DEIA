import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

try{
    pb.connect();
}catch(error)
{
    console.log("Fallo en la conexión.");
}