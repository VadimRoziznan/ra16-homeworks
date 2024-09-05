import React, { useState, useEffect } from "react";
import "./watch.css";
import { CloseButton } from "../buttons";

export interface IWatch {
  name: string,
  timeZone: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const Watch: React.FC<IWatch> = (props) => {
  const { name, timeZone, onClick } = props;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const offset = parseInt(timeZone) * 60 * 60 * 1000; // переводим часы в миллисекунды
  const localDate = new Date(date.getTime() + offset);

  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();
  const seconds = localDate.getSeconds();

  const hoursAngle = (hours % 12 + minutes / 60) * 30;
  const minutesAngle = (minutes + seconds / 60) * 6;
  const secondsAngle = seconds * 6;

  return (
    <>
      <div className="watch-container">
        <div className="watch-name">{name}</div>
        <div className="hero-circle">
          <CloseButton type="button" onClick={onClick}/>
          <div className="hero-face">
            <div id="hour" className="hero-hour" style={{ transform: `rotate(${hoursAngle}deg)` }}></div>
            <div id="minute" className="hero-minute" style={{ transform: `rotate(${minutesAngle}deg)` }}></div>
            <div id="second" className="hero-second" style={{ transform: `rotate(${secondsAngle}deg)` }}></div>
          </div>
        </div>
      </div>
    </>
  );
};