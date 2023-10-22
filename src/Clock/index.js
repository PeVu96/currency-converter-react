import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <section className="clock">
    <div className="date">
      Aktualna data:
      {" "}
      {date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </div>
      <div className="time">
        Aktualna godzina:
        {" "}
        {date.toLocaleString(undefined, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </div>
    </section>
    </>
  );
};

export default Clock;