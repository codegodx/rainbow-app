// import authConfig from "./auth.config";
// import NextAuth from "next-auth";
// import {
//   apiAuthRouting,
//   authRouting,
//   DEFAULT_LOGIN,
//   publicRouting,
// } from "./config/routes";
// export { auth as middleware } from "@/auth";
// export default middleware((req) => {
//   console.log(req.auth) //  { session: { user: { ... } } }
// })



import NextAuth from "next-auth";
// import { auth } from "./auth";
import { authConfig } from "./auth.config";
import {
  apiAuthRouting,
  authRouting,
  DEFAULT_LOGIN,
  publicRouting,
} from "./config/routes";

const {auth} = NextAuth(authConfig)

export default auth((req):any => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
      const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRouting);
      const isPublicRoute = publicRouting.includes(nextUrl.pathname);
      const isAuthRoute = authRouting.includes(nextUrl.pathname);

      if (isApiAuthRoute){
        return null;
      }

      if (isAuthRoute) {
        if (isLoggedIn) {
          return Response.redirect(new URL(DEFAULT_LOGIN, nextUrl));
        }
       return null;
        }
      
if (!isLoggedIn && !isPublicRoute) {
  return  Response.redirect (new URL("/", nextUrl));
}
return null;
}) 

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import NextAuth from "next-auth"; 
// import authConfig from "./auth.config";
// import {
//   apiAuthRouting,
//   authRouting,
//   DEFAULT_LOGIN,
//   publicRouting,
// } from "./config/routes";

// const {auth} = NextAuth(authConfig)

// export default auth((req) => {
//   const {nextUrl} = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRouting);
//   const isPublicRoute = publicRouting.includes(nextUrl.pathname);
//   const isAuthRoute = authRouting.includes(nextUrl.pathname);

//   if (isApiAuthRoute){
//     return null
//   }

//    if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN,nextUrl));
//    }
//    return null
//   }

// })

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
