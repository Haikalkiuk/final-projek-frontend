import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroEvent from "../components/hero-event";
import Seacrh from "../components/search-event";
import HomeEventSection from "../components/event-landing-section";
import SeacrhEvent from "../components/search-event";
import Tomel from "../components/event-btn";





export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col">
        <HeroEvent/>
        <Seacrh/>
        <HomeEventSection />
        <Tomel/>
        
        
        
        
        
        
      </main>
      <Footer />
    </>
  );
}
