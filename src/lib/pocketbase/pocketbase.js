import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.DB_URL);

export default pb;

try{
    const inside = pb.authStore.isValid;
    console.log("Conexión exitosa.");    
}catch(error)
{
    console.log("Fallo en la coexión.");
}