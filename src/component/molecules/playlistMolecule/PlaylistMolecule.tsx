'use client'
import React, { use, useEffect } from 'react'
import { Container } from '@/component/atoms'
import PlaylistTable from '../playlistTable/PlaylistTable'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchPlaylists } from '@/store/features/playlistSlice';
function PlaylistMolecule() {

    const dispatch = useAppDispatch()
    const playlists = useAppSelector((state) => state.playlists)

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, []);
  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"2rem", marginLeft:"5rem", color:"white"}}>
        <Container.RandomDiv $height='auto'>
            <h1>Playlist</h1>
            {playlists.status === 'loading' && <h1>Loading...</h1>}
            {playlists.status === 'succeeded' && <PlaylistTable playlists={playlists.playlists}/>}
        </Container.RandomDiv>
    </div>
  )
}

export default PlaylistMolecule