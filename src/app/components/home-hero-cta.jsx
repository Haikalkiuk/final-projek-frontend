import * as React from "react";
import EventList from "./event-list";
import { highlightedEvents } from "../data/events";

const events = highlightedEvents;

export default function HomHeroCta() {
    return (
        <div className="flex flex-col justify-center px-9 py-7 mt-16 rounded-xl bg-[linear-gradient(180deg,#48609F_0%,#102A71_100%)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full relative">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-16 text-3xl font-black text-amber-50 max-md:mt-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f7cdc7d161d03b33901cc3108cd16669bb4df3fd73b74cef7ea0d0e97fb8f1?apiKey=bd88937389e442d383d42860de3b76f2&"
                                className="aspect-[0.94] fill-[linear-gradient(174deg,rgba(255,255,255,0.00)_2.77%,#FFDC5F_130.45%)] w-[63px]"
                            />
                            <img src="/images/highligted-person.svg" alt="person" className="absolute" />
                            <div className="mt-44 max-md:mt-5">
                                Beli Tiket Konser Bebas Antrian Hanya di Infinitix!
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <EventList events={events} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

