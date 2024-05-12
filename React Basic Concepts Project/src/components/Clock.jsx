import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2>{language === "spanish" ? "Hora actual:" : "Current time:"}</h2>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </>
  );
}
