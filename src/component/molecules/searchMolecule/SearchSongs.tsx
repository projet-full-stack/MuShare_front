import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchSongs } from "@/store/features/songSlice";
import { useEffect } from "react";
import MusicItem from "../musicItemMolecule/MusicItem";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const StyledRecentMusicMolecule = styled.div`
    position: absolute;
    align-items: start;
    margin-left: 17rem;
    margin-top: 7rem;   
    background-color: #222222;
    border: solid;
    border-radius: 10px;
    width: 30%;
`;

function SearchSongsMolecule({value=''}) {
    const dispatch = useAppDispatch();
    const songs = useAppSelector((state) => state.songs);
    const token = useAppSelector((state: any) => state.authentication.token) ?? localStorage.getItem('token');

    useEffect(() => {
        dispatch(fetchSongs(token));
    }, []);

    let songsFiltered: typeof songs.songs[] = [];
    if (songs.status === 'succeeded') {
        songsFiltered = songs.songs.filter((song: any) => song.title.includes(value) || song.author.includes(value));
    }
    return (
        <StyledRecentMusicMolecule>
            
            {songs.status === 'loading' && <CircularProgress sx={{marginLeft:"45%"}}/>}
            {songs.status === 'succeeded' && songsFiltered.map((song: any) => (
                <MusicItem title={song.title} author={song.author} username={song.owner.username}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default SearchSongsMolecule;