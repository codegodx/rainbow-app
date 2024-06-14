"use server";

import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN } from "@/config/routes";
import { AuthError } from "next-auth";


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
const email = formData.get('email');
const password = formData.get('password');
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN,
    });
    

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials!";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}


export async function SignOut() {
  await signOut({ redirectTo: "/" });
}