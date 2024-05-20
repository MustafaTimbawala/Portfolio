
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/UI/NavBar"
import styles from "@/app/page.module.css"
import Link from "next/link";
import { Providers } from "./providers";
import Simple from "./UI/newNavBar";

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
        <Providers> 
        <div className={styles.everything}>
          <div>
            <SideNav/>
          </div>

          <div> 
            {children}
          </div>

        </div>
          
        </Providers>


        </body>
    </html>
  );
}
