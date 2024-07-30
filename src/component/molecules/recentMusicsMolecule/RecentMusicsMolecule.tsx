import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Typography from "@/component/atoms/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MusicItem from "@/component/molecules/musicItemMolecule/MusicItem";
import { fetchSongsLasts } from "@/store/features/lastSongSlice";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

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
    const token = useSelector((state: any) => state.authentication.token);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
      }, [])

    useEffect(() => {
        dispatch(fetchSongsLasts(token));
    }, []);

    
    return (
        <StyledRecentMusicMolecule>
            
            <Typography.Title>Musiques ajoutées récemment :</Typography.Title>
            {songs.status === 'loading' && <CircularProgress sx={{marginLeft:"45%"}}/>}
            {songs.status === 'succeeded' && songs.songs.map((song: any) => (
                <MusicItem title={song.title} author={song.author} username={song.owner.username} file={song.downloadedFile} id={song.id}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default RecentMusicsMolecule;