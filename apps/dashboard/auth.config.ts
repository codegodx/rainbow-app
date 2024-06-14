import type { NextAuthConfig ,User} from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { getUser } from "./lib/data/users";
import * as bcrypt from "bcryptjs";





export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      
      authorize: async (credentials): Promise<User | any> => {
        try {
          let user = null;

          const { email, password } =
            await signInSchema.parseAsync(credentials);
          user = await getUser(email);
          if (!user) {
            throw new Error("User not found.");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            throw new Error("Invalid password.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return false;
          }
        }
      },
    }),
  ],
  
} satisfies NextAuthConfig;


