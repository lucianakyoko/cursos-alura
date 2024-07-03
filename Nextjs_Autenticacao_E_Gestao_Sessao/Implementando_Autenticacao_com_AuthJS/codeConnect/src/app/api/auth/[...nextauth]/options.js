import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../../prisma/db";
import bcrypt from 'bcrypt'
export const options = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
    maxAge: 3000
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'Digite seu e-mail'
        },
        password: {
          label: 'Senha',
          type: 'password',
          placeholder: 'Digite sua senha'
        }
      },
      async authorize (credentials) {
        try {
          const foundUser = await db.user.findFirst({
            where: {
              email: credentials.email
            }
          })

          if(foundUser) {
            console.log('User encontrado')
            const passMach = bcrypt.compareSync(credentials.password, foundUser.password)
            if (passMach) {
              console.log('Usuário correto')
              delete foundUser.password

              return foundUser
            }
          }
        } catch (error) {
          console.log('Erro ao autorizar o usuário', error)
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if(session?.user) {
        session.user.id = parseInt(token.sub)
      }
      return session
    }
  }
}