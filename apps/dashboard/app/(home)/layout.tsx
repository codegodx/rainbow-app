"use client"

import { FloatingNav } from "@/components/navbar/navbar";
import { TbHomeBolt, TbShoppingBag, TbUsersGroup, TbUserShield, TbUserCircle } from "@repo/ui/react-icons";
import { Nav } from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";


export default function WebLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Nav MenuLink={navItems} />
      <FloatingNav navItems={navItems} />
      <main>
        {props.auth}
        {props.children}
      </main>
      <Footer />
    </>
  );
}


const navItems = [
  {
    name: "Beranda",
    link: "/",
    icon: <TbHomeBolt className="godx-h-5 godx-w-5 godx-text-neutral-200" />,
  },
  {
    name: "Produk",
    link: "/product",
    icon: (
      <TbShoppingBag className="godx-h-5 godx-w-5 godx-text-neutral-200" />
    ),
  },
  {
    name: "Mitra UMKM",
    link: "/mitra",
    icon: <TbUsersGroup className="godx-h-5 godx-w-5 godx-text-neutral-200" />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <TbUserCircle className="godx-h-5 godx-w-5 godx-text-neutral-200" />
  },

  {
    name: "Login",
    link: "/login",
    icon: (
      <TbUserShield className="godx-block  godx-h-5 godx-w-5 godx-text-neutral-200" />
    ),
  },
];