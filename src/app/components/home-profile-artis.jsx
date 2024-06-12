import artismonth from "../data/artist";
import ArtisList from "./artist-list";


export default function Artistotm () {
    return (
        
        <>
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-10">Artist Of The Month</h2>
                <ArtisList Artists={artismonth} />
            </div >
        </>
    );
}