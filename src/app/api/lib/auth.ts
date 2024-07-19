
import prisma from '../../../../db';
import CredentialsProvider from 'next-auth/providers/credentials';
export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'password', type: 'password', placeholder: '' },
      },

      //@ts-ignore
      async authorize(credentials: any) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.username,
            }
          })
          if (!user) {
            return null;
          }
          if (credentials.password !== user.password) {
            return null;
          }
          return {
            id: user.id,
            email: user.email,
            userId: user.id,
          };
        } catch (err) {
          console.log(err)
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.uid
      }
      return session
    }
  },
  pages: {
    signIn: '/signup',
  }
}