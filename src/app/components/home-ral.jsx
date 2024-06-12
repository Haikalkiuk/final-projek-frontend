import { rali } from "../data/galeri";
import ArtisList from "./artist-list";


export default function HomeRal () {
    return (
        
        <>
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-10">Rekomendasi Artis Lainnya</h2>
                <ArtisList artist={rali} />
            </div >
        </>
    );
}