"use client"
import AuthHeader from "./components/AuthHeader/AuthHeader";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import CreateHeader from "./components/CreateHeader/CreateHeader";
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

  const isAuthPage = pathname.startsWith('/auth') && !pathname.endsWith('/create') && !pathname.endsWith('/saved-stories') && !pathname.endsWith('/my-stories')
  const isCreatePage = pathname.endsWith('/create')
  const isMain = pathname.endsWith('/')
  const isStories  = pathname.endsWith('/saved-stories') || pathname.endsWith('/my-stories')




  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {isMain && !isAuthPage && !isAuthPage &&
          <Header/>
        }

        {isAuthPage && !isCreatePage && !isMain &&
          <AuthHeader/>
        }
        
 
        {isCreatePage && !isMain && !isAuthPage &&
          <CreateHeader/>
        }
        <main>
          {children}
        </main>

        
        {isAuthPage &&
        
        <footer className="footer">
             © 2025 Подорожники
        </footer>
        }

        {isCreatePage &&
        
          <Footer/>
        }

        {isStories &&
          <Footer/>
        }

        
        
        
      </body>
    </html>
  );
}
