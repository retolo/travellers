
import AuthHeader from "@/app/components/AuthHeader/AuthHeader";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {





  
  return (
    <>
   

        <AuthHeader/>

        
            <main>
              
                {children}
              
              
            </main>
        
        

        
        
        
        <footer className="footer">
             © 2025 Подорожники
        </footer>
     </>

  );
}
