import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { ProfileArtis } from "../components/hero-profile-artis";
import HomeArtisProfile from "../components/home-arpro-section";
import Galeri from "../components/home-galeri-section";
import HomeRal from "../components/home-ral";





export default function ArtisProfile() {
  return (
    <>
      <Header/>    
      <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col">
        <ProfileArtis/>
        <HomeArtisProfile/>
        <HomeRal/>
        
        
        
        
        
      </main>
      <Footer />
    </>
  );
}
