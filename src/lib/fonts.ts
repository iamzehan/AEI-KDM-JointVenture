import { Noto_Sans_Bengali, Tiro_Bangla, Anek_Bangla } from "next/font/google";

export const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "700"], // Specify desired weights
  subsets: ["bengali"], // Crucial for Bangla character support
  variable: "--font-noto-sans-bengali", // Optional CSS variable
  display: "swap",
});

export const tiroBangla = Tiro_Bangla({
  weight: ["400"], // Specify desired weights
  subsets: ["bengali"], // Crucial for Bangla character support
  variable: "--font-tiro-bangla", // Optional CSS variable
  display: "swap",
});

export const anekBangla = Anek_Bangla({
  weight: ["400"], // Specify desired weights
  subsets: ["bengali"], // Crucial for Bangla character support
  variable: "--font-anek-bangla", // Optional CSS variable
  display: "swap",
});
