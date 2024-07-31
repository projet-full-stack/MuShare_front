import React from 'react'
import { forwardRef } from 'react';

const CurrentTrack = forwardRef(function CurrentTrack(props: any, ref: any) {

    function handleTimeUpdated() {
      // console.log(ref.current.currentTime);

      // console.log( props.progressBarRef.current.value)
      props.progressBarRef.current.value = ref.current.currentTime
    } 

    const onLoadedMetadata = () => {
        const seconds = ref.current.duration;
        props.setDuration(seconds);
        props.progressBarRef.current.max = seconds;      
    };
  return (
    <audio ref={ref} hidden onLoadedMetadata={onLoadedMetadata}
    src={props.src}
    onTimeUpdate={handleTimeUpdated}></audio>
  )
})

export default CurrentTrack