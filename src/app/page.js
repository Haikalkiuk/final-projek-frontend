import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HomeEventSection from "./components/home-event-section";
import HomHeroCta from "./components/home-hero-cta";
import HomeEventSectionByLocation from "./components/home-event-by-location";
import Artistotm from "./components/home-artisotm-section";
import HomeCreator from "./components/home-creator";



export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col">
        <Hero />
        <HomeEventSection />
        <HomHeroCta />
        <HomeEventSectionByLocation />
        <Artistotm/>
        <HomeCreator/>
        
        
        
        
      </main>
      <Footer />
    </>
  );
}
