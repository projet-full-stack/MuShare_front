import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchSongs } from "@/store/features/songSlice";
import { useEffect } from "react";
import MusicItem from "../musicItem.tsx/MusicItem";
import styled from "styled-components";

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

    useEffect(() => {
        dispatch(fetchSongs());
    }, []);

    let songsFiltered: typeof songs.songs[] = [];
    if (songs.status === 'succeeded') {
        songsFiltered = songs.songs.filter((song: any) => song.title.includes(value) || song.author.includes(value));
    }
    return (
        <StyledRecentMusicMolecule>
            
            {songs.status === 'loading' && <p>Loading...</p>}
            {songs.status === 'succeeded' && songsFiltered.map((song: any) => (
                <MusicItem title={song.title} author={song.author} username={song.user.username}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default SearchSongsMolecule;