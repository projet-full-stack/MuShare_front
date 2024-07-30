import React, { useEffect, useState } from 'react'

function SpanTrackTime(props: any) {

    const [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(props.audioRef.current.currentTime)
        }, 1000)
    }, [currentTime]);

  return (
    <span>{props.formatTime(currentTime)}</span>
  )
}

export default SpanTrackTime