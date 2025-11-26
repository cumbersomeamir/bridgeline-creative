import { Inter, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "BridgeLine Creative | Talent Management & Culture Building",
  description: "India–UK based talent management and culture-building agency shaping the next wave of artists, experiences, and IPs. Artist management, creative direction, and event IP development.",
  keywords: "talent management, artist management, music agency, India UK, creative agency, event IP, underground music, electronic music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${bebasNeue.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
