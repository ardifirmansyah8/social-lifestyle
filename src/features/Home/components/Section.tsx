import Image from "next/image";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import clsx from "clsx";

type Props = {
  title: string;
  data: Array<{
    icon: string;
    title: string;
    url: string;
  }>;
  inverted?: boolean;
};

export default function Section({ title, data, inverted = false }: Props) {
  return (
    <div
      className={clsx(
        "rounded-[10px] px-14 py-4",
        inverted ? "bg-brown-1" : "bg-white"
      )}
    >
      <Label className="text-xs font-bold">{title}</Label>
      <div className="grid grid-cols-4 gap-x-9 gap-y-4 mt-6">
        {data.map((menu) => (
          <div key={menu.title} className="flex flex-col text-center gap-2.5">
            <Image
              src={`/icon/icon-${menu.icon}.svg`}
              width={40}
              height={40}
              alt={menu.title}
            />
            <Link
              href={menu.url}
              target="_blank"
              className="text-red-1 text-[8px] leading-3"
            >
              {menu.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
