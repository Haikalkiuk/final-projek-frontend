
import Link from "next/link";

import { creatorprofile } from "../data/creator";
import EventList from "./event-list";

const events = eventsTeratas;

export default function HomeEventSection() {    
    return (
        <>
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-10">Event Teratas</h2>
                <EventList events={events} />
            </div >
        </>
    );
}