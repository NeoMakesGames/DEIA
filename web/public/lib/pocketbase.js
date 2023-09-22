import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

try{
    console.log("Conexion Establecida.", pb);

    const res = await pb.collection("administradores").create("benja@gmail.com", "12344567765443");
    if (res.status === 200) {
        console.log("true");
    } else {
        console.log("false");
    }

}catch(e)
{
    console.log(e);
}
export default pb;