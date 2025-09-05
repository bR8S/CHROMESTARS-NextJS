"use client";

import { useEffect, useState } from 'react'
import Events from '../components/Events'

type Event = {
    _id: string;
    name: string;
}

export default function EventsPage(){
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        fetch('/api/events')
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setEvents(data.events)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            < Events events={events} />
        </>
    )
}