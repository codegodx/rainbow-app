// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@repo/ui/components/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@repo/ui/components/form";
// import { Input } from "@repo/ui/components/input";
// import * as React from "react";
// import { login } from "@/lib/config";
// import { signInSchema } from "@/lib/zod";
// import {signIn} from "@/auth"



// export default function EmailForm() {
//   const [isPending, startTransition] = React.useTransition();
//   const [error,setError] = React.useState("");
//   const [showPassword, setShowPassword] = React.useState(false);
//    const [success, setSuccess] = React.useState("");
//   const form = useForm<z.infer<typeof signInSchema>>({
//     resolver: zodResolver(signInSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });


//   function onSubmit(FormData: z.infer<typeof signInSchema>) {
//     startTransition(() => {
//       signIn("credentials",FormData).then((data) => {
          
//         if (data.success) {
//           setSuccess(data.success);
//            setShowPassword(true);// change this to show password element
//         } else {
//           // Handle success
//         setError(data.error)
//          setTimeout(() => {
//           setError(""); // Reset error state
//          }, 3000);
//         }
//       });
//     });
//   }


//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="godx-space-y-4">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{success ? "Your Email" : "Enter Email"}</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="you@mail.com"
//                   {...field}
//                   disabled={isPending || success}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {showPassword && (
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Enter Your Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="*****"
//                     {...field}
//                     type="password"
//                     required
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         )}

//         <Button className="godx-w-full" type="submit" disabled={isPending}>
//           login
//         </Button>
//         {error && <p className="godx-text-red-600 godx-text-center">{error}</p>}
//       </form>
//     </Form>
//   );
// }

"use client"

import * as React from "react";
import { authenticate } from "@/lib/action/auth";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Button } from "@repo/ui/components/button";
import { useFormState, useFormStatus } from "react-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { CgChevronDoubleRight } from "@repo/ui/react-icons";
export function Loginform () {
  const [error, formAction] = useFormState(authenticate, undefined);


return (
  <Card>
    <CardHeader>
      <CardTitle>Login To Your Account</CardTitle>
      <CardDescription>Sign in Required</CardDescription>
    </CardHeader>
    <CardContent>
      <form action={formAction}>
        <div className="godx-flex godx-flex-col godx-space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" name="email" required />
          <Label htmlFor="email">Password</Label>
          <Input type="password" id="password" name="password" required />
          <LoginButton />
          {error && <p>{error}</p>}
        </div>
      </form>
    </CardContent>
  </Card>
)};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="godx-flex godx-items-center godx-justify-center godx-w-full godx-py-2 godx-bg-primary godx-text-white godx-rounded-md godx-font-semibold godx-transition godx-duration-300 godx-ease-in-out godx-transform godx-hover:godx-scale-105"
    >
      {pending ? "Loading" : "Login"}
      <CgChevronDoubleRight className="godx-w-6 godx-h-6 godx-ml-2" />
    </Button>
   
  );
}




