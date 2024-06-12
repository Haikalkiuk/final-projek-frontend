import * as React from "react";
import CurrencyFormatter from "../lib/currency-formatter";
import Link from "next/link";

export default function ArtistCard({ artis }) {
    return (
        <>
            <Link href={`/artis/${artis.id}`}>
                <div className="flex flex-col grow p-5 mx-auto w-full bg-white rounded-xl border border-solid border-neutral-900 max-md:mt-9">
                    <img
                        loading="lazy"
                        src={artis.image}
                        alt={artis.name}
                        className="w-full aspect-[1.28]"
                    />
                    <div className="flex flex-col mt-4">
                        <div className="text-2xl font-bold text-zinc-800">
                            {artis.name}
                        </div>
                       
                                
                        </div>
                    </div>
                    
                    
            </Link>
        </>
    );
}

