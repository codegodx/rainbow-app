"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { emailSchema } from "@/lib/zod";
import { getUserByEmail } from "@/lib/data/users";
import {  redirect } from "next/navigation";

type eProps = {
  email: string;
};

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(
  values: z.infer<typeof emailSchema>
): Promise<eProps | any> {
  // Verify credentials && get the user

  const { email } = await emailSchema.parseAsync(values);
  const users = await getUserByEmail(email);

  if (users) {
    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ users, expires });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
   return {
    success:true
   }
   
  } 
else {
  return {
    error: "User not found.",
  };
  

} 
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return redirect("/auth");
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
