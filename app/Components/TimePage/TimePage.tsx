"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      
      <p className="text-2xl">{currentTime}</p>
    </div>
  );
}
