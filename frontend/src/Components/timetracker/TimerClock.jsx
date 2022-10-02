import React from "react";
import styles from "./tracker.module.css";
import { useTimer } from "./useTimer";
import { FiPlay } from "react-icons/fi";

export const Watch = () => {
  const { watch, showButton, start, pause } = useTimer(0);

  return (
    <div className={styles.fullTimeContainer}>
      <h1>{secondsToTime(watch)}</h1>
      <div>
        <button
          onClick={() => {
            showButton ? start() : pause();
          }}
        >
          <FiPlay />
        </button>
      </div>
    </div>
  );
};

function secondsToTime(secs) {
  var h = Math.floor(secs / (60 * 60));
  var divisor_for_minutes = secs % (60 * 60);
  var m = Math.floor(divisor_for_minutes / 60);
  var divisor_for_seconds = divisor_for_minutes % 60;
  var s = Math.ceil(divisor_for_seconds);
  return `${h} : ${m} : ${s}`;
}
