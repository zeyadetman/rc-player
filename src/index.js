import React, { useRef, useState } from "react";

function defaultFormatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
    .filter(a => a)
    .join(":");
}

export default function Player({
  audioSource,
  decrementPeriod = 5,
  incrementPeriod = 5,
  onIncrement = () => {},
  onDecrement = () => {},
  onPlay = () => {},
  onStop = () => {},
  audioFunctions = {},
  formatTime = time => {
    return defaultFormatTime(time);
  }
}) {
  const audio = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div>
      <audio
        preload="auto"
        ref={audio}
        onTimeUpdate={() => {
          setCurrentTime(Math.floor(audio.current.currentTime));
        }}
        onLoadedMetadata={() => {
          setDuration(Math.floor(audio.current.duration));
          setCurrentTime(Math.floor(audio.current.currentTime));
        }}
        src={audioSource}
        {...audioFunctions}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto"
          }}
        >
          <p style={{ margin: 0 }}>{formatTime(currentTime)}</p>
          <p style={{ margin: 0 }}>{formatTime(duration)}</p>
        </div>
        <progress
          style={{ width: "100%" }}
          value={currentTime}
          max={duration}
        />
      </div>
      <div>
        <button
          onClick={() => {
            audio.current.play();
            onPlay();
          }}
        >
          play
        </button>
        <button
          onClick={() => {
            audio.current.pause();
            onStop();
          }}
        >
          stop
        </button>
        <button
          onClick={() => {
            audio.current.currentTime += incrementPeriod;
            onIncrement();
          }}
        >
          {`+${incrementPeriod}`}
        </button>
        <button
          onClick={() => {
            audio.current.currentTime -= decrementPeriod;
            onDecrement();
          }}
        >
          {`-${decrementPeriod}`}
        </button>
      </div>
    </div>
  );
}