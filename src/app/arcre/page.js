import react from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { ProfileCreator } from "../components/hero-profile-creator";

export default function CreatorProfile() {
    return (
      <>
        <Header/>    
        <main className="flex min-h-screen max-w-screen-lg mx-auto flex-col">
          <ProfileCreator/>
          
          
          
          
          
        </main>
        <Footer />
      </>
    );
  }