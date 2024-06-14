"use client"

import { SignOut } from "@/lib/action/auth";
import { useFormState } from "react-dom";

export default function LogOut() {
    const [error, formAction] = useFormState(SignOut, undefined);
  return (
      <form action={formAction}>
          <button type="submit">logout</button>
          {error ? <p>error</p> : "" }
      </form>
  )
}
