"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { signInSchema } from "@/lib/zod";
import { authenticate } from "@/lib/action/login";
import { MdWarning } from "@repo/ui/react-icons";
import { useFormState, useFormStatus } from "react-dom";

export default function PasswordForm({
  session,
}: {
  session: {
    users: {
      email: string;
    };
  };
}) {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const userEmail = session.users.email;
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: userEmail,
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form action={dispatch} className="godx-space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  type="hidden"
                  // disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} type="password" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoginButton />
        {errorMessage && (
          <>
            <MdWarning className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </form>
    </Form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="godx-w-full" aria-disabled={pending}>
      Log in
    </Button>
  );
}