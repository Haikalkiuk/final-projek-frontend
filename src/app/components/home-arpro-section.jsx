import Link from "next/link";
import Galeri from "./home-galeri-section";
import ArtisList from "./artist-list";

const galeri = Galeri;

export default function HomeArtisProfile() {
    return (
        <>
            <div className="mt-12">

                <div className="flex flex-row gap-1.5">
                    <div className="flex grow my-auto text-center text-neutral-1000 text-2xl font-bold mb-10">Muncul di 3 Event</div>
                    <div className="flex gap-1.5 whitespace-nowrap text-slate-500">
                    <div className="flex gap-3 text-sm whitespace-nowrap text-neutral-900">
        <div className="flex gap-0.5 justify-center p-2 rounded border border-solid bg-zinc-50 border-neutral-900">
          <div className="flex-1">filter</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fad6ceaa36d78f4033e41bb667c89a044a89e268dde5dfefd5b6cff935ad780?apiKey=9e843663077c4c7ab823446f13fb11a2&"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
    
      </div>
    </div>
                    </div>
                </div>
                <ArtisList galeri={galeri} />
            
        </>
    );
}