import Link from "next/link";

import { Label } from "../ui/label";

export default function Trademark() {
  return (
    <div className="w-full bg-white h-8 bg-footer-bg pt-4 px-3">
      <div className="flex justify-between">
        <Label className="text-[8px] text-white flex gap-1">
          <span>©</span>
          <span>2024 Masjed Indonesia Digital</span>
        </Label>

        <div className="flex items-center gap-1">
          <Link className="text-[8px] text-white" href={"https://google.com"}>
            Kebijakan Privasi
          </Link>
          <Label className="text-[8px] text-white">|</Label>
          <Link className="text-[8px] text-white" href={"https://google.com"}>
            Syarat & Ketentuan
          </Link>
          <Label className="text-[8px] text-white">|</Label>
          <Link className="text-[8px] text-white" href={"https://google.com"}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
