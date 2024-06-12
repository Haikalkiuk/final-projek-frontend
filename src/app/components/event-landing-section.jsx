import eventsTeratas, { eventpage } from "../data/events";
import EventList from "./event-list";

const events = eventpage;

export default function HomeEventSection() {    
    return (
        <>
            <div className="mt-12">
                <EventList events={events} />
            </div >
        </>
    );
}