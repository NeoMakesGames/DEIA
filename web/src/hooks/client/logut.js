import pb from "../../lib/pocketbase";

export default function logout() {
<>
    <button onClick={() => pb.authStore.clear}>Cerrar sesion</button>
</>
};