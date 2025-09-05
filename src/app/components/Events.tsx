import Image from "next/image";

type Event = {
    _id: string;
    name: string;
}

interface EventProps {
    events: Event[];
}

export default function Events({events}: EventProps){
    return(
        <>
        <div className="events padding">
            {events.map(event => {
                return(
                    <a href={`/event/${event._id}`} className="event">
                        <div className="event-top">
                            <div className="event-title"><Image src="/chromestars-star.png" width="20" height="20" alt="" />{event.name}</div>
                        </div>
                    </a>
                )
            })}
        </div>
        </>
    )
}