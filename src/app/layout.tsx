import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/UI/sideNav"
import styles from "@/app/page.module.css"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Mustafa Timbawala portfolio",
  description: "The portfolio of Mustafa Timbawala",

};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={montserrat.className}>
        <div className={styles.everything}>

        <div>
        <SideNav/>
        </div>

        <div> 
          {children}
        </div>
        
        </div>

        </body>
    </html>
  );
}
