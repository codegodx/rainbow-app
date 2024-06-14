import {auth} from "@/auth";

export default async function DashboardLayout(props: {
  superadmin: React.ReactNode;
  marketing: React.ReactNode;
  team: React.ReactNode;
  client: React.ReactNode;
}){
  const session = await auth();
  return (
    <>
      <main className="godx-min-h-screen">
        {session?.user.role === "ADMIN" && props.superadmin}
        {session?.user.role === "USER" && props.client}
        {session?.user.role === "MARKETING" && props.client}
      </main>
    </>
  );
}
