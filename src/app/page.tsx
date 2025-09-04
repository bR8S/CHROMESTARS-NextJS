"use client";

import { useState } from "react";
import '../styles/globals.css';

import MainContent from "./components/MainContent";
import IntroScreen from "./components/IntroScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleProceed = () => {
    setShowIntro(false); // hide intro, show main homepage
  };

  return (
    <>
    { showIntro ? 
      (
        <IntroScreen onProceed={handleProceed} />
      ) : 
      ( < MainContent /> )
    }
    </>
  );
}
