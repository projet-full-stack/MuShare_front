import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Title } from "@/component/atoms/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MusicItem from "../musicItemMolecule/MusicItem";
import { fetchSongsLasts } from "@/store/features/lastSongSlice";
import { CircularProgress } from "@mui/material";

const StyledRecentMusicMolecule = styled.div`
    position: absolute;
    align-items: start;
    margin-left: 17rem;
    margin-top: 3rem;   
    background-color: #222222;
    border-radius: 10px;
    border: none;
`;

function RecentMusicsMolecule() {

    const dispatch = useAppDispatch();
    const songs = useAppSelector((state) => state.songs);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
      }, [])

    useEffect(() => {
        dispatch(fetchSongsLasts());
    }, []);
    return (
        <StyledRecentMusicMolecule>
            
            <Title>Musiques ajoutées récemment :</Title>
            {songs.status === 'loading' && <CircularProgress sx={{marginLeft:"45%"}}/>}
            {songs.status === 'succeeded' && songs.songs.map((song: any) => (
                <MusicItem title={song.title} author={song.author} username={song.owner.username} id={song.id}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default RecentMusicsMolecule;