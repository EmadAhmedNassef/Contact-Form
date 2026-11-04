import Providers from "@/utils/Providers";
import "./globals.css";

import { Karla } from "next/font/google";
const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} bg-[var(--first-color)]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
