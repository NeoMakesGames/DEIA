import pb from "@/../public/lib/pocketbase.js";

export default function logout() {
<>
    <button onClick={() => pb.authStore.clear}>Cerrar sesion</button>
</>
};

"use client";
import pb from "../../lib/pocketbase";

export default function deleteAccount() {
    id = pb.authStore.user.id;
    async function delAcc (id) {
        await pb.collection('users').delete(id.toString());
    }
    <>
        <button onClick={() => delAcc()}>Eliminar Cuenta</button>
    </>
};