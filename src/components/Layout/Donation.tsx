"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "../Footer";
import { Label } from "../ui/label";
import Trademark from "../Footer/Trademark";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: Props) {
  return (
    <div className="bg-grey-1 max-w-[375px] mx-auto flex flex-col">
      <header className="bg-donation-bg w-full h-[110px] pt-4 pl-4">
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <Image
              src={"/icon/icon-arrow-left-red.svg"}
              width={9}
              height={15}
              alt="icon-arrow-left"
            />
          </Link>
          <Label className={"font-bold text-xl leading-0 mt-1"}>{title}</Label>
        </div>
      </header>

      <main className="bg-grey-1 mt-1 flex flex-col">{children}</main>

      <Trademark />
    </div>
  );
}
