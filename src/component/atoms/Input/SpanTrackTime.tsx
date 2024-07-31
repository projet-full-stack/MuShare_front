import React, { useEffect, useState } from 'react'

function SpanTrackTime(props: any) {

    const [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        setInterval(() => {
          if (props.audioRef?.current?.currentTime != null)
            setCurrentTime(props.audioRef.current.currentTime)
        }, 1000)
    }, [currentTime, props.audioRef]);

  return (
    <span>{props.formatTime(currentTime)}</span>
  )
}

export default SpanTrackTime