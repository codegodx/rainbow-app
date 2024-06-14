import { pressStart } from "@/config/fonts";

export default function footer() {
  return (
    <footer className={pressStart.className}>
      <div className="godx-flex godx-justify-center godx-items-center godx-h-20 godx-bg-slate-950 godx-border-t-1.5 godx-mt-40 godx-border-t-orange-50 godx-text-white">
        <div className="godx-flex godx-justify-center godx-items-center">
          <p className="godx-text-sm">© 2024 Java Rainbow</p>
        </div>
      </div>
    </footer>
  );
}
