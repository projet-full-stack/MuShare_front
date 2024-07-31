import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchSongs } from "@/store/features/songSlice";
import { useEffect, useState } from "react";
import MusicItem from "../musicItemMolecule/MusicItem";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { deleteSong } from "@/store/features/deleteSongSlice";

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
    const idUser = useAppSelector((state: any) => state.authentication.idUser)
    const deletedStatus = useAppSelector((state) => state.deleteSong.status)
    const token = useAppSelector((state: any) => state.authentication.token);
    const [songsFiltered, setSongsFiltered] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        dispatch(fetchSongs(token));
    }, []);

    useEffect(() => {
        setSongsFiltered(songs.songs.filter((song: any) => song.title.includes(value) || song.author.includes(value)));

    }, [songs, value, setSongsFiltered])
    
    const handleDeleteSong = (e:any, id: any) => {
        dispatch(deleteSong({id: id, token: token}));
        e.stopPropagation();
        setIsDeleting(true);
    };

    useEffect(() => {
        if (deletedStatus === 'succeeded' && isDeleting) {
            dispatch(fetchSongs(token));
            setIsDeleting(false);
        }
    }, [deletedStatus, dispatch, isDeleting, setIsDeleting]);

    return (
        <StyledRecentMusicMolecule>
            
            {songs.status === 'loading' && <CircularProgress sx={{marginLeft:"45%"}}/>}
            {songs.status === 'succeeded' && songsFiltered.map((song: any) => (
                <MusicItem key={song.id} title={song.title} author={song.author} username={song.owner.username} ownerId={song.owner.id} idUser={idUser} id={song.id} onDelete={handleDeleteSong}
                ></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default SearchSongsMolecule;