"use client";

import clsx from "clsx";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

import { Label } from "./ui/label";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className={clsx("w-full bg-white flex flex-col items-center pt-5")}>
      <div className="w-72 flex flex-col items-center">
        <Label className="text-xs">License</Label>
        <div className="w-full flex justify-between mt-4 mb-6">
          <div className="flex items-center gap-1">
            <Image
              src="/footer/icon-laz.svg"
              alt="icon-laz"
              width={28}
              height={30}
            />
            <Label className="font-medium text-[8px]">
              Lembaga Amil Zakat
              <br />
              SK Menteri Agama RI
              <br />
              Nomor 027/F/Tahun 2022
            </Label>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/footer/icon-ymid.svg"
              alt="icon-ymid"
              width={28}
              height={30}
            />
            <Label className="font-medium text-[8px]">
              Lembaga Nadzir Wakaf
              <br />
              SK BWI Nomor 3.3.300384
            </Label>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-7">
            <Image
              src="/footer/icon-kemenkumham.svg"
              alt="icon-kemenkumham"
              width={27}
              height={30}
            />
            <Image
              src="/footer/icon-kominfo.svg"
              alt="icon-kominfo"
              width={27}
              height={30}
            />
            <Image
              src="/footer/icon-bnpb.svg"
              alt="icon-bnpb"
              width={27}
              height={30}
            />
          </div>
          <Label className="font-medium text-[8px]">
            Nomor TD-PSE: 281221002470600000001
          </Label>
        </div>
      </div>

      <Separator className="bg-red-1 w-64 my-4" />

      <Label>
        Tetap terhubung <span className="font-bold">#BersamaKami</span>
      </Label>

      <div className="flex items-center gap-8 mt-4">
        <Image
          src="/footer/icon-ig.svg"
          alt="icon-ig"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/bersamakami.id/")
          }
        />
        <Image
          src="/footer/icon-fb.svg"
          alt="icon-fb"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => window.open("https://www.facebook.com/bersamakami.id")}
        />
        <Image
          src="/footer/icon-x.svg"
          alt="icon-twitter"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => window.open("https://twitter.com/bersamakami_id")}
        />
        <Image
          src="/footer/icon-youtube.svg"
          alt="icon-youtube"
          width={22}
          height={18}
          className="cursor-pointer"
          onClick={() => window.open("https://www.youtube.com/channel/UC9J")}
        />
        <Image
          src="/footer/icon-tiktok.svg"
          alt="icon-tiktok"
          width={22}
          height={22}
          onClick={() => window.open("https://www.tiktok.com")}
        />
      </div>

      <div className="w-full h-8 bg-footer-bg mt-4 pt-4 px-3">
        <div className="flex justify-between">
          <Label className="text-[8px] text-white flex gap-1">
            <span>©</span>
            <span>2024 Masjed Indonesia Digital</span>
          </Label>

          <div className="flex items-center gap-1">
            <Link className="text-[8px] text-white" href={"google.com"}>
              Kebijakan Privasi
            </Link>
            <Label className="text-[8px] text-white">|</Label>
            <Link className="text-[8px] text-white" href={"google.com"}>
              Syarat & Ketentuan
            </Link>
            <Label className="text-[8px] text-white">|</Label>
            <Link className="text-[8px] text-white" href={"google.com"}>
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
