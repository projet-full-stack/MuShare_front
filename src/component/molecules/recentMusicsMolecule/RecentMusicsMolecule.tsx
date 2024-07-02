import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Title } from "@/component/atoms/Typography";
import { fetchSongs } from "@/store/features/songSlice";
import { useEffect } from "react";
import styled from "styled-components";
import MusicItem from "../musicItem.tsx/MusicItem";

const StyledRecentMusicMolecule = styled.div`
    position: absolute;
    align-items: start;
    margin-left: 17rem;
    margin-top: 3rem;   
    background-color: #222222;
    border: solid;
    border-radius: 10px;
`;

function RecentMusicsMolecule() {

    const dispatch = useAppDispatch();
    const songs = useAppSelector((state) => state.songs);

    useEffect(() => {
        dispatch(fetchSongs());
    }, []);
    return (
        <StyledRecentMusicMolecule>
            
            <Title>Musiques ajoutées récemment :</Title>
            {songs.status === 'loading' && <p>Loading...</p>}
            {songs.status === 'succeeded' && songs.songs.map((song: any) => (
                <MusicItem title={song.title} author={song.author} username={song.user.username}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default RecentMusicsMolecule;