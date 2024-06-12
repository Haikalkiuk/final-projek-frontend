import Link from "next/link";
import eventsTeratas from "../data/events";
import EventList from "./event-list";

const events = eventsTeratas;

export default function HomeEventSectionByLocation() {
    return (
        <>
            <div className="mt-12">

                <div className="flex flex-row gap-1.5">
                    <div className="flex grow my-auto text-center text-neutral-1000 text-2xl font-bold mb-10">Temukan Event dikotamu</div>
                    <div className="flex gap-1.5 whitespace-nowrap text-slate-500">
                       <Link href="/events"><button> <div> Lihat Semua</div > </button></Link>
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7.5L18 15L11 22.5" stroke="#48609F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <a href="eve"></a>
                    </div>
                </div>
                <EventList events={events} />
            </div >
        </>
    );
}