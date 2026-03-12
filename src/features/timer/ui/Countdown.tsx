"use client";
import { useEffect, useState } from "react";
import {
  formatDaysString,
  formatHoursString,
  formatMinutesString,
  formatSecondsString,
} from "../utils/formatDate";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const weddingDate = new Date("2026-06-13T16:30:00+03:00");
      const timeDiff = weddingDate.getTime() - now.getTime();
      setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeDiff % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <CountdownItem value={days} label={"дней"} />
      <CountdownItem value={hours} label={"часов"} />
      <CountdownItem value={minutes} label={"минут"} />
      <CountdownItem value={seconds} label={"секунд"} />
    </div>
  );
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[24px] font-medium text-wine">{value}</span>
      <span>{label}</span>
    </div>
  );
};
