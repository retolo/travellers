'use client'
import Info from "./components/Info/Info";
import Join from "./components/Join/Join";
import Hero from "./components/Hero/Hero";
import PopularStories from "./components/PopularStories/PopularStories";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function Home(){
  return(
    <>
      <Header/>
      <Hero/>
      <Info/>
      <PopularStories/>
      <Join/>
      <Footer/>
    </>
  )
}


export default Home;