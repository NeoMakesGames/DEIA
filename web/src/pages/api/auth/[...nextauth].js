import NextAuth from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [


        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: {  label: "Password", type: "password", placeholder: "Password" }
            },

            async authorize(credentials, req) {
                //const res = reuqest de existencia del usuario
                const user = await res.json();
            },
        }),


        GithubProvider({
            clientId:"Iv1.a0b25d7caf93c402",
            clientSecret:"80a905433713416d037efbd4a383437f5b2cf0c3",
        }),
        
        
        GoogleProvider({
            clientId:"",
            clientSecret:"",
        })
    ]
})  

