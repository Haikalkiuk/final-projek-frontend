import { galeri } from "../data/galeri";
import ArtisList from "./artist-list";


export default function Galeri () {
    return (
        
        <>
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-10">Galeri</h2>
                <ArtisList galeri={galeri} />
            </div >
        </>
    );
}