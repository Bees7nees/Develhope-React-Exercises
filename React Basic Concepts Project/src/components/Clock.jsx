import { useEffect, useState } from "react";

export function Clock () {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <>
        <h2>Current Time:</h2>
        <h2>{currentTime.toLocaleTimeString()}</h2>
      </>
    );
}