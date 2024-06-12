import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroArtis from "../components/hero-artis";
import Seacrha from "../components/search-artis";
import ArtisHomeSection from "../components/artis-home-section";
import Tomel from "../components/event-btn";





export default function HomeArtis() {
  return (
    <>
      <Header/>    
      <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col">
        <HeroArtis/>
        <Seacrha/>
        < ArtisHomeSection/>
        <Tomel/>
        
        
        
        
      </main>
      <Footer />
    </>
  );
}
