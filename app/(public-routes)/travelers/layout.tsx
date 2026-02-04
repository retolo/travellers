'use client'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
export default function TravelersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {





  
  return (
    <>
   

        <Header/>

        
            <main>
              
                {children}
              
              
            </main>
        
        

        
        <Footer/>
        
        
     </>

  );
}
