import { pb } from  "@/../public/lib/pocketbase.js";
//import { useSession } from "next-auth/react";


const register = (data, adm) => {
    (async () => {
        if(adm){
            try{
                const user = await pb.collection('Administradores').create(data);
                return user;
            }catch(e)
            {
                console.log(e);
                return null;
            }
        }
        else{
            try{
                const user = await pb.collection('Medicos').create(data);
                return user;   
            }catch(e)
            {
                console.log(e);
                return null;
            }
        }  
    })();
};

const signUp = (userdata) => {
    (async () => {
        try{
            const med = await pb.collection("Medicos").authWithPassword(userdata);
            const adm = await pb.collection("Administradores").authWithPassword(userdata);
        }catch(e){
            console.log(e);
        }
        if(med.status === 200){
            return med;
        }
        else if(adm.status === 200){
            return adm;
        }
        console.log("error");
        return null;

    })
}


const logout = () => {
    pb.authStore.clear;
    return null;
};

const deleteAccount = () => {
    id = pb.authStore.user.id;
    (async () => {
        const del = await pb.collection('users').delete(id.toString());
        
        if(del.staus === 200)
        {
            return null;
        }
        console.error("no se ha podido eliminar el usuario");
        return null; 
    });
};

export {register, signUp, logout, deleteAccount};