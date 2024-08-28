"use client";

import clsx from "clsx";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Footer from "../Footer";
import { Label } from "../ui/label";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-grey-1 max-w-[375px] mx-auto flex flex-col">
      <header className="bg-white w-full flex justify-between px-6 py-1.5 rounded-bl-[10px] rounded-br-[10px]">
        <Link href={"/"}>
          <Image
            src={"/logo-masjed.svg"}
            width={35}
            height={35}
            alt="logo-masjed"
          />
        </Link>
        <Label className={clsx(poppins.className, "font-bold text-2xl")}>
          Social Lifestyle
        </Label>
        <Image
          src={"/placeholder-logo.svg"}
          width={34}
          height={34}
          alt="placeholder-logo"
        />
      </header>

      <main className="bg-grey-1 my-1">{children}</main>

      <Footer />
    </div>
  );
}
