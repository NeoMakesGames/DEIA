import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

try{
    console.log("Conexion Establecida.", pb);
    const record = await pb.collection("administradores").getOne("123456789012345");

    if (record.status === 200) {
        console.log("true");
    } else {
        console.log(record.isLoaded);
    }

}catch(e)
{
    console.log(e);
}
export default pb;