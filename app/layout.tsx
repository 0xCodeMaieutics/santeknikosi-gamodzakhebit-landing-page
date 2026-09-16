import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "სანტექნიკოსი გამოძახებით | თბილისი და შემოგარენი",
  description:
    "ოჯახის სანტექნიკი გამოძახებით. 24/7. თბილისი და შემოგარენი. ვიზიტი 50 ლარიდან. დარეკე: +995 599 45 70 70",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ka" className={`${notoGeorgian.variable} h-full antialiased`}>
      <body className={`${notoGeorgian.className} min-h-full flex flex-col bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
