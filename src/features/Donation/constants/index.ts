export const CONTENT: {
  [key: string]: {
    id: number;
    description: string;
    title: string;
    niat: string;
    arti: string;
    pilihan: { id?: number; icon: string; label: string }[];
  };
} = {
  Zakat: {
    id: 0,
    description:
      "Zakat BersamaKami wujudkan kepedulian dan tanggung jawab sosial untuk membantu sesama yang membutuhkan",
    title: "Niat Mengeluarkan Zakat",
    niat: "Nawaitu an ukhrija zakata maali fardha llillahi ta’aala",
    arti: "Saya berniat mengeluarkan zakat harta milikku karena Allah Ta’ala.",
    pilihan: [
      {
        id: 1,
        icon: "icon-checklist",
        label: "Penghasilan",
      },
      {
        id: 2,
        icon: "icon-checklist",
        label: "Maal",
      },
      {
        id: 3,
        icon: "icon-checklist",
        label: "Perusahaan",
      },
      {
        id: 4,
        icon: "icon-checklist",
        label: "Fitrah",
      },
    ],
  },
  Infaq: {
    id: 5,
    description:
      "Berbagi berkah, menebar kebaikan, menguatkan ukhwah dan peningkatan layanan masjid untuk operasional, fasilitas, sosial, pemberdayaan, pendidikan, lingkungan dan Kesejahteraan.",
    title: "Niat Mengeluarkan Infaq",
    niat: "Allahumma inni as aluka hubbaka wa hubba man yuhibbuka wa hubba 'amalin yuqorribu ila hubbika",
    arti: "Ya Allah, aku memohon kepada-Mu untuk mudah melakukan kebaikan dan meninggalkan kemungkaran serta aku memohon pada-Mu supaya bisa mencintai orang miskin, ampunilah (dosa-dosa)ku dan juga rahmatilah aku.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Operasional",
      },
      {
        icon: "icon-checklist",
        label: "Fasilitas",
      },
      {
        icon: "icon-checklist",
        label: "Sosial",
      },
      {
        icon: "icon-checklist",
        label: "Pemberdayaan",
      },
      {
        icon: "icon-checklist",
        label: "Pendidikan",
      },
      {
        icon: "icon-checklist",
        label: "Lingkungan",
      },
      {
        icon: "icon-checklist",
        label: "Kesejahteraan",
      },
    ],
  },
  Wakaf: {
    id: 6,
    description:
      "Setiap wakaf dengan uang yang anda tunaikan BersamaKami akan menjadi sumber kebaikan yang tak pernah berhenti.",
    title: "Niat Mengeluarkan Wakaf",
    niat: "Allahummar zuqni fiihi rahmatal aytaam wa ith aamat-tha aam wa ifsyaas-salaam wa suhbatal kiraam bithoulika yaa malja-al aamiliin",
    arti: "Ya Allah, berilah aku rezeki berupa kasih sayang terhadap anak yatim dan pemberian makan dan penyebaran salam dan pergaulan dengan orang-orang mulia, dengan kemuliaan-Mu. Wahai tempat berlindung bagi orang-orang yang berharap.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Masjid",
      },
      {
        icon: "icon-checklist",
        label: "Rumah Tahfidz",
      },
      {
        icon: "icon-checklist",
        label: "Ambulance",
      },
      {
        icon: "icon-checklist",
        label: "Sumur Bor",
      },
    ],
  },
  "Sedekah Yatim": {
    id: 7,
    description:
      "Sebarkan cinta kepada anak-anak yatim, terangi jalan mereka menuju masa depan BersamaKami.",
    title: "Doa Menyantuni Yatim",
    niat: "Allahummar zuqni fiihi rahmatal aytaam wa ith aamat-tha aam wa ifsyaas-salaam wa suhbatal kiraam bithoulika yaa malja-al aamiliin",
    arti: "Ya Allah, berilah aku rezeki berupa kasih sayang terhadap anak yatim dan pemberian makan dan penyebaran salam dan pergaulan dengan orang-orang mulia, dengan kemuliaan-Mu. Wahai tempat berlindung bagi orang-orang yang berharap.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Baju Baru",
      },
      {
        icon: "icon-checklist",
        label: "Beasiswa",
      },
      {
        icon: "icon-checklist",
        label: "Kesejahteraan",
      },
    ],
  },
  "Jum'at Berkah": {
    id: 8,
    description:
      "BersamaKami manfaatkan Hari Jum’at penuh berkah untuk berbagi kebaikan kepada sesama. Raih kebaikan dan jutaan pahala di hari yang Mulia.",
    title: "Keutamaan Hari Jum’at",
    niat: "",
    arti: "Dan sedekah pada hari itu (Jum'at) lebih mulia dibanding hari-hari selainnya. (HR Ibnu Khuzaimah)",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Anak Yatim",
      },
      {
        icon: "icon-checklist",
        label: "Dhuafa",
      },
      {
        icon: "icon-checklist",
        label: "Janda",
      },
      {
        icon: "icon-checklist",
        label: "Marbot",
      },
    ],
  },
  "Rumah Tahfidz": {
    id: 9,
    description:
      "BersamaKami membangun rumah Tahfidz untuk mencetak generasi berkualitas dan berakhlak mulia. Dapatkan pahala jariyah dengan melahirkan generasi Qur’ani.",
    title: "Kebaikan Membangun Rumah Tahfidz",
    niat: "",
    arti: "Jika seseorang meninggal dunia, maka terputuslah amalannya kecuali tiga perkara (yaitu): sedekah jariyah, ilmu yang dimanfaatkan, atau do’a anak yang sholeh (HR. Muslim no. 1631)",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Baju Baru",
      },
      {
        icon: "icon-checklist",
        label: "Beasiswa",
      },
      {
        icon: "icon-checklist",
        label: "Asatidz",
      },
      {
        icon: "icon-checklist",
        label: "Kesejahteraan",
      },
    ],
  },
  "Bantu Palestina": {
    id: 10,
    description:
      "Salurkan bantuan anda untuk Palestina BersamaKami. Setiap kontribusi sekecil apapun akan memberikan harapan bagi saudara kita di Palestina.",
    title: "Doa untuk Saudara di Palestina",
    niat: "Allahummanshur ikhwananal musliminal fi filistin",
    arti: "Ya Allah, tolonglah saudara-saudara kami umat Islam di Palestina.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Pangan",
      },
      {
        icon: "icon-checklist",
        label: "Kesehatan",
      },
      {
        icon: "icon-checklist",
        label: "Air Bersih",
      },
      {
        icon: "icon-checklist",
        label: "Listrik",
      },
    ],
  },
  "Bantu Gereja": {
    id: 11,
    description:
      "BersamaKami salurkan bantuan anda untuk mendukung gereja dan kegiatan rohani.",
    title: "Doa untuk Bantu Gereja",
    niat: "Allahummanshur ikhwananal musliminal fi filistin",
    arti: "Ya Allah, tolonglah saudara-saudara kami umat Islam di Palestina.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Baju Baru",
      },
      {
        icon: "icon-checklist",
        label: "Beasiswa",
      },
      {
        icon: "icon-checklist",
        label: "Kesejahteraan",
      },
    ],
  },
  Kemanusiaan: {
    id: 12,
    description:
      "Dukungan program kemanusiaan BersamaKami dan berikan bantuan kepada mereka yang membutuhkan.",
    title: "Kebaikan kepada Sesama",
    niat: "Allahummanshur ikhwananal musliminal fi filistin",
    arti: "Ya Allah, tolonglah saudara-saudara kami umat Islam di Palestina.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "BLT",
      },
      {
        icon: "icon-checklist",
        label: "Proteksi Jiwa",
      },
      {
        icon: "icon-checklist",
        label: "Kesehatan",
      },
    ],
  },
  Lingkungan: {
    id: 13,
    description:
      "Dukung upaya pelestarian lingkungan BersamaKami, setiap donasi anda berperan untuk generasi yang akan datang.",
    title: "Kebaikan Peduli Lingkungan",
    niat: "Allahummanshur ikhwananal musliminal fi filistin",
    arti: "Ya Allah, tolonglah saudara-saudara kami umat Islam di Palestina.",
    pilihan: [
      {
        icon: "icon-checklist",
        label: "Kebencanaan",
      },
      {
        icon: "icon-checklist",
        label: "Sanitasi",
      },
      {
        icon: "icon-checklist",
        label: "Air Bersih",
      },
    ],
  },
};
