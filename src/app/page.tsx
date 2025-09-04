"use client";

import { useState, useEffect } from "react";
import '../styles/globals.css';

import MainContent from "./components/MainContent";
import IntroScreen from "./components/IntroScreen";

type User = {
    _id: string; 
    first_name?: string;
    last_name?: string;
    username?: string; 
    email?: string;
    phone_number?: string;
    profile_image?: string;
    background_image?: string;
    wins?: number;
    elo: number;
    score?: number;
    competitions?: number;
    placements?: number[];
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsers(data.users); // <- use the nested array
        } else {
          console.error(data.message);
        }
      })
      .catch(console.error);
  }, []);

  const handleProceed = () => {
    setShowIntro(false); // hide intro, show main homepage
  };

  return (
    <>
    { showIntro ? 
      (
        <IntroScreen onProceed={handleProceed} />
      ) : 
      ( < MainContent users={users} /> )
    }
    </>
  );
}

