"use client";

import Slider from "react-slick";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Section from "./components/Section";
import CardInfo from "./components/CardInfo";
import { useFetchNews, useFetchPrograms } from "@/hooks";

const ECOSYSTEM = [
  {
    icon: "cari-masjid",
    title: "Cari Masjid",
    url: "#",
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
    url: "#",
  },
  {
    icon: "infaq",
    title: "Infaq",
    url: "#",
  },
  {
    icon: "wakaf",
    title: "wakaf",
    url: "#",
  },
  {
    icon: "sedekah-yatim",
    title: "Sedekah Yatim",
    url: "#",
  },
  {
    icon: "jumat-berkah",
    title: "Jum'at Berkah",
    url: "#",
  },
  {
    icon: "rumah-tahfidz",
    title: "Rumah Tahfidz",
    url: "#",
  },
];

const ISLAMIC_PRODUCT = [
  {
    icon: "qurban",
    title: "Kurban",
    url: "#",
  },
  {
    icon: "aqiqah",
    title: "Akikah",
    url: "#",
  },
  {
    icon: "umroh",
    title: "Umroh",
    url: "#",
  },
];

const SOSIAL_DONATION = [
  {
    icon: "palestine",
    title: "Bantu Palestina",
    url: "#",
  },
  {
    icon: "church",
    title: "Bantu Gereja",
    url: "#",
  },
  {
    icon: "social",
    title: "Kemanusiaan",
    url: "#",
  },
  {
    icon: "environment",
    title: "Lingkungan",
    url: "#",
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
  const { data: programsData } = useFetchPrograms();
  const programs = programsData?.data;

  const { data: newsData } = useFetchNews();
  const news = newsData?.data;

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
              {programs.map((item, i) => (
                <CardInfo key={`/berita-${i + 1}`} data={item} />
              ))}
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
                <CardInfo key={`/berita-${i + 1}`} data={item} />
              ))}
            </Slider>
          )}
          {news?.length === 0 && <Label>Tidak ada Berita</Label>}
        </div>
      </div>
    </div>
  );
}
