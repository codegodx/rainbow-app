import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedSession = DefaultSession["user"] & {
  role: "ADMIN" | "USER" | "MARKETING";
};

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: ExtendedSession;
  }
}
