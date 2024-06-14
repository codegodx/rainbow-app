import "@repo/ui/globals.css";
import "@repo/ui/styles.css";
import { inter } from "@/config/fonts";
import { Metadata } from "next";
import styles from "@/styles.module.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Java Rainbow",
    default: "Java Rainbow",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function RootLayout({
    children
}:{
  children : React.ReactNode;
}): JSX.Element {
  return (
    <html lang="id">
      <body
        className={`${inter.className} ${styles.Scrollbar} godx-antialiased godx-bg-gradient-to-tl godx-from-black godx-to-stone-950`}
      >
    {children}
      </body>
    </html>
  );
}
