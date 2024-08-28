import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { Label } from "@/components/ui/label";

import type { IInfo } from "@/types";

type Props = {
  data: IInfo;
};

export default function CardNews({ data }: Props) {
  return (
    <div className="bg-pink-1 rounded-[5px] h-[146px] border border-grey-1 flex flex-col gap-4">
      <Image
        src={data.imageUrl}
        alt={`berita-${1}`}
        width="0"
        height="0"
        sizes="100%"
        className="w-full h-[100px] rounded-tl-[5px] rounded-tr-[5px] object-cover"
      />
      <div className="text-left flex flex-col justify-between px-3 py-2 flex-1">
        <div className="flex flex-col gap-0.5">
          <Label className="text-red-1 text-[6px] font-normal">
            #{data.categoryName}
          </Label>
          <Link
            className="text-[8px] text-red-1 font-medium"
            href={`https://crowfunding.com/news/${data.id}`}
          >
            {data.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
