import Container from '@/component/atoms/Container';
import Media from '@/component/atoms/Media';
import React, { useCallback, useEffect, useRef, useState } from 'react'

function ControlTrackMolecule(props: any) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  // const repeat = useCallback(() => {
  //   console.log('run');

  //   playAnimationRef.current = requestAnimationFrame(repeat);
  // });

  useEffect(() => {
    if (isPlaying) {
      props.audioRef.current.play();
      // playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      props.audioRef.current.pause();
      // cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, props.audioRef]);

  const togglePlayPause = () => {
    setIsPlaying((prev: any) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      props.audioRef.current.play();
    } else {
      props.audioRef.current.pause();
    }
  }, [isPlaying, props.audioRef]);
  return (
    <Container.MusicReaderButtons>
      <Media.Svg path="M220-240v-480h60v480h-60Zm520 0L394-480l346-240v480Z" height="48px" width="48px" />
      <Media.Svg onClick={togglePlayPause} path={isPlaying ? "M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" : "m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"} height="48px" width="48px" />
      <Media.Svg path="M680-240v-480h60v480h-60Zm-460 0v-480l346 240-346 240Z" height="48px" width="48px" />
      <Media.Svg path="M451-122q-123-10-207-101t-84-216q0-77 35.5-145T295-695l43 43q-56 33-87 90.5T220-439q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741-439q0-109-75.5-184.5T481-699h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801-439q0 125-83.5 216T511-122Z" height="48px" width="48px" />
    </Container.MusicReaderButtons>
  )
}

export default ControlTrackMolecule