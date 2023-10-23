import pb from "@/../public/lib/pocketbase.js";

export default function logout() {
<>
    <button onClick={() => pb.authStore.clear}>Cerrar sesion</button>
</>
};