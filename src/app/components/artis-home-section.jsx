import { artis } from "../data/artist";
import ArtisList from "./artist-list";
const Artis = artis;

export default function ArtisHomeSection() {    
    return (
        <>
            <div className="mt-12">
                <ArtisList Artis={Artis} />
            </div >
        </>
    );
} 