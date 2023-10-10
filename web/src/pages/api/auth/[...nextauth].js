import pb from "@/../public/lib/pocketbase";
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
//import EmailProvider from "next-auth/providers/email";

export default NextAuth({
    strategy: 'jwt',
    providers: [
        CredentialsProvider({

            name: 'user and password',
            id: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: {  label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const {email, password} = credentials;
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                //const res = await pb.collection("administradores").getOne(id="yosruyz2pyf5lrl");
                if (user) {
                     return user;
                } else {
                    return null;
                }
            },
        }),

        GoogleProvider({
            clientId:"19266694660-0ldq17qloaplorcoofd02s9dvjubcfg1.apps.googleusercontent.com",
            clientSecret:"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",
        }), 
    ],
    pages: {
       //signIn: '/auth/signin',
    },
})  

