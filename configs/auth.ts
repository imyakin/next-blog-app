import { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }
        )
    ],
    // Credentials({
    //     credentials: {
    //         email: { label: 'email', type: 'email', required: true},
    //         password: { label: 'password', type: 'password', required: true}
    //     },
    //     async authorise(credentials){
    //         if(!credentials.email)
    //         return null
    //     }
    // })
}