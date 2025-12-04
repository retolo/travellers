"use client"
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith('/auth')
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {isAuthPage 
        
        ? <header className="header">
          <Link href={'/'}><div className="wrapperHeader">
            <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
            <p>Подорожники</p>
          </div></Link>
            
        </header>

        : <Header/> 
        
        }
        <main>
          {children}
        </main>

        
        {isAuthPage
        
        ?<footer className="footer">
             © 2025 Подорожники
        </footer>

        : <Footer/>
        
        }
      </body>
    </html>
  );
}
