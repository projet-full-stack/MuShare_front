import SpanTrackTime from '@/component/atoms/Input/SpanTrackTime';
import React from 'react'
import { forwardRef } from 'react';

const ProgressBarMolecule = forwardRef(function ProgressBarMolecule(props: any, ref: any) {
    
    function handleProgressChange()  {
      props.audioRef.current.currentTime = props.currentTime;
      }

      const formatTime = (time: any) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    }
    return (
    <>{props.audioRef.current && 
      <>
      <SpanTrackTime audioRef={props.audioRef} formatTime={formatTime}></SpanTrackTime>
      <div className="wrapper">
          <input id="timeInput" ref={ref} disabled type="range" min="0" max={props.duration} value={props.currentTime} onChange={handleProgressChange}/>
      </div>
      <span id="ostDuration">{formatTime(props.duration)}</span>
      </>}
  </>

    )
});

export default ProgressBarMolecule