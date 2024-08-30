"use client";

import Slider from "react-slick";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Section from "./components/Section";
import CardInfo from "./components/CardInfo";
import { useFetchLandingPage } from "@/hooks";
import type { IProgram, IInfo } from "@/types";

const ECOSYSTEM = [
  {
    icon: "cari-masjid",
    title: "Cari Masjid",
    url: "https://masjed.id/inframe/carimasjid",
  },
  {
    icon: "jadwal-sholat",
    title: "Jadwal Sholat",
    url: "#",
  },
  {
    icon: "quran",
    title: "Al-Quran",
    url: "#",
  },
  {
    icon: "arah-kiblat",
    title: "Arah Kiblat",
    url: "#",
  },
];

const ZISWAF = [
  {
    icon: "zakat",
    title: "Zakat",
    url: "/donation?type=Zakat",
  },
  {
    icon: "infaq",
    title: "Infaq",
    url: "/donation?type=Infaq",
  },
  {
    icon: "wakaf",
    title: "wakaf",
    url: "/donation?type=Wakaf",
  },
  {
    icon: "sedekah-yatim",
    title: "Sedekah Yatim",
    url: "/donation?type=Sedekah Yatim",
  },
  {
    icon: "jumat-berkah",
    title: "Jum'at Berkah",
    url: "/donation?type=Jum'at Berkah",
  },
  {
    icon: "rumah-tahfidz",
    title: "Rumah Tahfidz",
    url: "/donation?type=Rumah Tahfidz",
  },
];

const ISLAMIC_PRODUCT = [
  {
    icon: "qurban",
    title: "Kurban",
    url: "/donation",
  },
  {
    icon: "aqiqah",
    title: "Akikah",
    url: "/donation",
  },
  {
    icon: "umroh",
    title: "Umroh",
    url: "/donation",
  },
];

const SOSIAL_DONATION = [
  {
    icon: "palestine",
    title: "Bantu Palestina",
    url: "/donation?type=Bantu Palestina",
  },
  {
    icon: "church",
    title: "Bantu Gereja",
    url: "/donation?type=Bantu Gereja",
  },
  {
    icon: "social",
    title: "Kemanusiaan",
    url: "/donation?type=Kemanusiaan",
  },
  {
    icon: "environment",
    title: "Lingkungan",
    url: "/donation?type=Lingkungan",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false,
};

export default function Home() {
  const { data: landingPageData } = useFetchLandingPage();
  const programs = landingPageData?.data[2].contents;
  const news = landingPageData?.data[5].contents;

  return (
    <div className="flex flex-col gap-1">
      <Section title="Ekosistem Masjid" data={ECOSYSTEM} inverted />
      <Section title="ZISWAF" data={ZISWAF} />
      <Section title="Produk Islami" data={ISLAMIC_PRODUCT} inverted />
      <Section title="Donasi Sosial" data={SOSIAL_DONATION} />

      <div className="bg-brown-1 pl-14 py-4">
        <div className="flex items-center justify-between pr-5">
          <Label className="font-bold">Tebar Kebaikan #BersamaKami</Label>
          {programs && programs.length > 0 && (
            <Button
              size={"sm"}
              className="!text-[8px] bg-pink-1 text-red-1 px-2 py-1 hover:bg-transparent h-5"
              onClick={() => window.open("https://crowdfunding.com/programs")}
            >
              Lihat Semua
            </Button>
          )}
        </div>
        <div className="mt-6">
          {programs && programs.length > 0 && (
            <Slider {...settings}>
              {programs.map((item, i) => {
                const dataItem = item as IProgram;
                const data = {
                  id: item.id,
                  imageUrl: dataItem.media1Url,
                  title: dataItem.category.title,
                  categoryName: dataItem.category.name,
                };
                return <CardInfo key={`/berita-${i + 1}`} data={data} />;
              })}
            </Slider>
          )}
          {programs?.length === 0 && <Label>Tidak ada Program</Label>}
        </div>
      </div>

      <div className="bg-white pl-14 py-4">
        <div className="flex items-center justify-between gap-5 pr-5">
          <Label className="font-bold">Berita</Label>
          {news && news.length > 0 && (
            <Button
              size={"sm"}
              className="!text-[8px] bg-pink-1 text-red-1 px-2 py-1 hover:bg-transparent h-5"
              onClick={() => window.open("https://crowdfunding.com/news")}
            >
              Lihat Semua Berita
            </Button>
          )}
        </div>
        <div className="mt-6">
          {news && news.length > 0 && (
            <Slider {...settings}>
              {news.map((item, i) => (
                <CardInfo key={`/berita-${i + 1}`} data={item as IInfo} />
              ))}
            </Slider>
          )}
          {news?.length === 0 && <Label>Tidak ada Berita</Label>}
        </div>
      </div>
    </div>
  );
}
