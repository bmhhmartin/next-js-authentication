

import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";


export const authOption = {
    page: {
        signIn: '/'
    },
    session:{
        strategy: 'jwt'
    },
    secret: process.env.JWT_KEY,
    providers: [
        GitHubProvider({
            clientId: 'dfers6577ddc0d4c53',
            clientSecret: '8541f63476abasdfedrf25dca03290'
        })
    ]
}


const handler = NextAuth(authOption);

export {handler as GET, handler as POST};
