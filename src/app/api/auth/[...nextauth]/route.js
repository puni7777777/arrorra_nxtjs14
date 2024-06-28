import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/app/(authorization)/lib/prisma'
import bcrypt from 'bcrypt'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      type: 'credentials',

      credentials: {
        email: { label: "email", type: "text", placeholder: 'howareyou@example.com' },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          }
        })
        if (!user) {
          return null
        }
        // const devuser = {
        //   id: '4',
        //   name: 'penny',
        //   email: 'penny@example.com',
        //   password: '123456'
        // }
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (isValid) {
          return user
        } else {
          return null
        }
      }
    })
  ],
})

export { handler as GET, handler as POST };