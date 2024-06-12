import artismonth from "../data/artist";
import ArtistCard from "./artist-card";

export default function ArtisList({ artist }) {
    return (
        <>
            <div className="flex flex-row gap-14 base-1/3 flex-wrap justify-center items-center ">

            {artismonth.map((artismonth) => (
            <ArtistCard key={artismonth.id} artis={artismonth} />
))}
</div>
        </>
    )
}