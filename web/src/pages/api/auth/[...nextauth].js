import pb from "@/../public/lib/pocketbase";
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

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
                console.log("true")
                const {email, password} = credentials
                const res = await pb.collection("administradores").authWithPassowrd(email, password);
                if (res.status === 200) {
                    console.log("true");
                    return res;
                } else {
                    console.log("false");
                    return null;
                }
            },
        }),


        GithubProvider({
            clientId:"Iv1.a0b25d7caf93c402",
            clientSecret:"80a905433713416d037efbd4a383437f5b2cf0c3",
        }),
    ],
    pages: {
       //signIn: '/auth/signin',
    },
})  

