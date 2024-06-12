import EventCard from "./event-card";

export default function EventList({ events }) {
    return (
        <>
            <div className="flex flex-row gap-14 base-1/3 flex-wrap justify-center items-center ">

                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </>
    )
}
