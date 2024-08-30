"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTENT } from "./constants";
import Layout from "@/components/Layout/Donation";
import DonationDialog from "./components/PaymentMethodDialog";

const DonationSchema = z.object({
  amount: z.string().regex(/^\d+$/),
  phone: z.string().regex(/^62[1-9]\d{7,11}$/),
});

type DonationType = z.infer<typeof DonationSchema>;

export default function Donation() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonationType>({ resolver: zodResolver(DonationSchema) });

  const search = useSearchParams();
  const type = search.get("type") ?? "";
  const dataContent = CONTENT[type] ?? {};

  const [product, setProduct] = useState("");
  const [dialog, setDialog] = useState("");

  const amount = watch("amount");
  const phone = watch("phone");

  const onNext = () => {
    setDialog("payment-method");
  };

  return (
    <Layout title={type}>
      <div className="bg-brown-1 p-5 flex flex-col gap-4 rounded-[10px]">
        <Label className="text-base font-bold">Deskripsi {type}</Label>
        <Label className="text-grey-2 leading-5">
          {dataContent.description}
        </Label>
      </div>

      <div className="bg-white p-5 rounded-[10px] mt-1">
        <div className="flex flex-col items-center text-center">
          <Label className="text-base font-bold mb-2.5">
            {dataContent.title}
          </Label>
          {dataContent.niat && (
            <Label className="mb-1 text-[10px] italic">
              “{dataContent.niat}”
            </Label>
          )}
          <Label className="mb-1 text-[10px]">{`"${dataContent.arti}"`}</Label>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <Label className="text-base font-bold mb-2.5">
            {type === "Zakat" ? "Pilihan" : "Peruntukan"}
          </Label>
          <div className="w-72 flex justify-center flex-wrap gap-x-4 gap-y-2.5">
            {dataContent?.pilihan?.map((item, index) => (
              <div
                key={index}
                className="w-1/5 flex flex-col items-center gap-2.5"
              >
                <Image
                  src={`/icon/${
                    type === "Zakat"
                      ? product === item.label
                        ? item.icon
                        : "icon-placeholder"
                      : item.icon
                  }.svg`}
                  width={34}
                  height={34}
                  alt={item.icon}
                  className={clsx(type === "Zakat" ? "cursor-pointer" : "")}
                  onClick={() => type === "Zakat" && setProduct(item.label)}
                />
                <Label className="text-[10px] text-center">{item.label}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-brown-1 p-5 flex flex-col gap-4 rounded-[10px] mt-1">
        <div className="flex flex-col gap-4">
          <Label className="text-base font-semibold">Nominal:</Label>
          <div>
            <Input
              leftIcon={
                <Label className="absolute top-3 left-4 text-red-1 text-xs">
                  Rp
                </Label>
              }
              {...register("amount")}
            />
            {errors.amount && (
              <Label className="text-red-500 text-xs mt-1">
                Nominal harus diisi dengan angka
              </Label>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <Label className="text-base font-semibold">Nomor Ponsel:</Label>
          <Label className="text-[10px] italic mt-1 mb-4">
            Untuk bukti pembayaran E-ZISWAF
          </Label>
          <div>
            <Input placeholder="62xxxxxxxxx" {...register("phone")} />
            {errors.phone && (
              <Label className="text-red-500 text-xs mt-1">
                No handphone tidak valid
              </Label>
            )}
          </div>
        </div>
        <Button
          className="bg-pink-1 text-lg text-red-1 hover:bg-pink-1"
          // onClick={() => window.open("https://google.com")}
          onClick={handleSubmit(onNext)}
        >
          Lanjutkan
        </Button>
      </div>

      <div className="bg-white pt-8 px-3 mt-1">
        <div
          className={clsx(
            "relative border-t border-l border-r border-red-1 text-center",
            type === "Zakat" ? "h-32" : "h-20"
          )}
        >
          <Label className="font-bold text-xs bg-white -top-3 relative px-4">
            MITRA LEMBAGA {type === "Zakat" ? "AMIL ZAKAT" : ""}
          </Label>
          {type === "Zakat" ? (
            <div className="w-full flex justify-center">
              <div className="w-72 flex justify-center flex-wrap gap-x-4 gap-y-2.5">
                <Image
                  src="/icon/icon-baznas.svg"
                  alt="icon-baznas"
                  width={44}
                  height={35}
                />
                <Image
                  src="/icon/icon-pppa.svg"
                  alt="icon-pppa"
                  width={56}
                  height={30}
                />
                <Image
                  src="/icon/icon-bsi.svg"
                  alt="icon-pppa"
                  width={45}
                  height={30}
                />
                <Image
                  src="/icon/icon-sinergi.svg"
                  alt="icon-sinergi"
                  width={78}
                  height={25}
                />
                <Image
                  src="/icon/icon-laz-dasi.svg"
                  alt="icon-laz-dasi"
                  width={51}
                  height={30}
                />
                <Image
                  src="/icon/icon-baznas-tangsel.svg"
                  alt="icon-baznastangsel"
                  width={55}
                  height={38}
                />
                <Image
                  src="/icon/icon-lazpersis.svg"
                  alt="icon-lazpersis"
                  width={93}
                  height={26}
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-between px-7">
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
          )}
        </div>
      </div>

      <DonationDialog
        open={dialog === "payment-method"}
        onClose={() => setDialog("")}
        phone={phone}
        amount={Number(amount)}
      />
    </Layout>
  );
}
