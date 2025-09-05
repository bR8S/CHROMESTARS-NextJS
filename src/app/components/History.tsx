import mongoose, { Document, Schema } from "mongoose";
import Image from "next/image";
import { useState, useEffect } from "react";

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

interface HistoryProps {
    races: Race[]
}

export default function History({races}: HistoryProps){
    // track which race is open by ID
    const [openRaceId, setOpenRaceId] = useState<string | null>(null);

    const toggleRace = (id: string) => {
        setOpenRaceId(openRaceId === id ? null : id);
    };


    return (
        <>
            <div className="races padding">
            {
                races.map((race) => {
                    return (
                        <div className="race" onClick={() => toggleRace(race._id)}>
                            <div className="race-top">
                                <div className="race-title"><Image className="race-img" src="/chromestars-star.png" width="20" height="20" alt=""/>{race.name} | {new Date(race.time).toDateString()}</div>
                                <div className="race-delete" data-delete-id={race._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                                    </svg>
                                </div>
                            </div>
                            {openRaceId === race._id && (
                                <div className="race-bottom">
                                    <ol className="race-participants">
                                        {race.participants.map((participant) => (
                                        <li
                                            key={participant._id}
                                            className="race-participant"
                                            data-id={participant._id}
                                        >
                                            {participant.username}
                                        </li>
                                        ))}
                                    </ol>
                                </div>
                            )}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}