import NextAuth, { NextAuthConfig } from "next-auth"
import github from "next-auth/providers/github"
 
export const { handlers, auth } = NextAuth({
    providers: [github],
    debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig)