"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogClose, DialogContent } from "@repo/ui/components/dialog";
import { Button } from "@repo/ui/components/button";
import {TbX} from "@repo/ui/react-icons";



export function Modal({ children,showmodal }: { children: React.ReactNode, showmodal: boolean}) {
  const router = useRouter();

  return (
    <Dialog open={showmodal}>
      <DialogContent>
        <DialogClose className="godx-absolute godx-top-0 godx-right-0">
          {" "}
          <Button
            onClick={() => {
              router.back();
            }}
            type="button"
            variant="ghost"
            size="icon"
          >
            <TbX />
          </Button>
        </DialogClose>

        {children}
      </DialogContent>
    </Dialog>
  );
}
