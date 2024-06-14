import { getSession} from "@/lib/config";
import PasswordForm from "../auth/passwordform";


export default async function PasswordPage() {
   const session = await getSession();
  return (
    <main className="godx-flex godx-w-full godx-items-center godx-justify-center md:godx-h-screen">
      <div className="godx-bg-purple-400/50  godx-rounded-2xl godx-relative godx-mx-auto godx-flex godx-w-full godx-max-w-[400px] godx-flex-col godx-space-y-2.5 godx-p-4">
        <div className="godx-flex godx-h-20 godx-w-full godx-items-end godx-rounded-lg godx-bg-blue-500 godx-p-3 md:godx-h-36">
          <div className="godx-w-32 godx-text-white md:godx-w-36">
            <p>logo</p>
          </div>
        </div>
        <PasswordForm session={session} />
      </div>
    </main>
  );
}






