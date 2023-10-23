import { pb } from  "@/../public/lib/pocketbase.js";

const registration = (data) => {
    (async () => {
        console.log(data); 
        try{
            const record = await pb.collection('Medicos').create(data);   
        }catch(e)
        {
            console.log(e)
        }  
    })();
};

export {registration};