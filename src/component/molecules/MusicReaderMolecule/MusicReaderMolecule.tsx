import React, { useEffect, useRef, useState } from 'react'
import { forwardRef } from 'react';
import ProgressBarMolecule from '../ProgressBarMolecule/ProgressBarMolecule';
import CurrentTrack from '../CurrentTrack/CurrentTrack';
import Media from '@/component/atoms/Media'

const MusicReaderMolecule = forwardRef(function MusicReaderMolecule(props: any, ref: any) {

    const [duration, setDuration] = useState("0:00");
    const [maxTime, setMaxTime] = useState();
    const progressBarRef = useRef()

    return (
        <Media.MusicReader>
            <CurrentTrack src={props.src} {...{ ref, setDuration, progressBarRef }}/>
            <ProgressBarMolecule ref={progressBarRef} audioRef={ref} duration={duration} maxTime={maxTime}/>
        </Media.MusicReader>
    )
})

export default MusicReaderMolecule