"use client";

import { useState, useEffect } from "react";
import mongoose, { Document, Schema } from "mongoose";

import History from "../components/History";

type Participant = {
  _id: string;
  username: string;
};

type Race = {
    _id: string; 
    name: string;
    time: Date;
    track?: string; // you left track empty, so make it optional for now
    event?: mongoose.Types.ObjectId;
    participants: Participant[];
}


export default function HistoryPage(){ 
    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        fetch('/api/races')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRaces(data.races);
            })
            .catch(console.error)
    }, []);

    return (
        <>
            < History races={races} />
        </>
    )
}