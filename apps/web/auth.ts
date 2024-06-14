import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@repo/database/prisma";
import { authConfig } from "./auth.config";
import { getUserById } from "./lib/data/users";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user }) {
      if (!user || !user.id) {
        return false;
      }
      
      const existingUser = await getUserById(user.id);
      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }
  
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        if (token.role && session.user) {
          session.user.role = token.role as "ADMIN" | "USER" | "MARKETING";
        }
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const userToken = await getUserById(token.sub);
      if (!userToken) return token;

      token.role = userToken.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
