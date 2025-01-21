import * as React from "react";
import SearchComponent from "./search-component";
import BuatEventBtn from "./buat-event-btn";

export default function Header() {
    return (
        <div className="flex gap-5 justify-center px-20 py-3.5 w-full shadow-sm bg-blue-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between text-base font-bold text-center text-white whitespace-nowrap">
               <button> <link rel="stylesheet" href="events/page" /><img
                    loading="lazy"
                    src="/images/logo-kuning.svg"
                    className="shrink-0 aspect-[1.82] w-[66px]" 
                /><link/></button>
                <div className="flex gap-5 justify-between my-auto">
                   <button> <link rel="stylesheet" href="src/app/artispage/page.js" ><div className="justify-center" >Explore</div> <link/></button>
                    <button> <div className="justify-center">Partnership</div></button>
                </div>
            </div>
            <div className="flex gap-5 self-start pl-20 text-sm max-md:flex-wrap">
                <SearchComponent />
                <BuatEventBtn />
            </div>
        </div>
    );
}

