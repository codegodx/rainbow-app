
import { DashboardNav } from "@/components/navbar/dashboardnav";
import {auth} from "@/auth"
import {
  Home,
  LineChart,
  Menu,
  Package2,
  ShoppingCart,
  Users,
} from "@repo/ui/lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <DashboardNav session={session} navmenu={menu}>
      {children}
      </DashboardNav>
    </>
  );
}

const menu = [
  {
    name: "Dashboard",
    link: "/panel",
    icon: <Home />,
  },
  {
    name: "Products",
    link: "/panel/products",
    icon: <Package2 />,
  },
  {
    name: "Users",
    link: "/panel/users",
    icon: <Users />,
  },
  {
    name: "Orders",
    link: "/panel/orders",
    icon: <ShoppingCart />,
  },

  {
    name: "Reports",
    link: "/panel/reports",
    icon: <LineChart />,
  },
  {
    name: "Settings",
    link: "/panel/settings",
    icon: <Menu />,
  },
];
