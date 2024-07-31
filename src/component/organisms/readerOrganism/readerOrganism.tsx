
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import React, { useEffect, useRef, useState } from 'react';
import Container from '@/component/atoms/Container';
import ControlTrackMolecule from '../../molecules/ControlTrackMolecule/ControlTrackMolecule';
import MusicReaderMolecule from '@/component/molecules/MusicReaderMolecule/MusicReaderMolecule';

function ReaderOrganism() {
  const dispatch = useAppDispatch()
  const isVisible = useAppSelector((state) => state.reader.isVisible);
  const token = useAppSelector((state) => state.authentication.token);
  const selectedSong = useAppSelector((state) => state.song);


  const [isLoaded, setIsLoaded] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  
  const handlePlay = (  ) => {
    if(audio.current?.readyState == 4) {
      if (audio.current?.paused) {
        audio.current.play();
    } else {
        audio.current?.pause();
    }
    }
}
  if(isVisible){
    return (
      <Container.Reader>
        <Container.MusicInformations>
            <p>
                <span style={{fontSize: "1rem"}} >{selectedSong.song.title}</span>
                <br/>
                <span style={{fontSize: "0.9rem", color: "#AAAAAA"}}>{selectedSong.song.author}</span>
            </p>
        </Container.MusicInformations>
        <ControlTrackMolecule audioRef={audio}/>
        <MusicReaderMolecule setIsLoaded={setIsLoaded} ref={audio} src={selectedSong.song.location}/>
    </Container.Reader>
  )
  }
    
}
export default ReaderOrganism