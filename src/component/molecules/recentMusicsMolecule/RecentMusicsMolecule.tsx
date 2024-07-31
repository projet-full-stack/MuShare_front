import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Typography from "@/component/atoms/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MusicItem from "@/component/molecules/musicItemMolecule/MusicItem";
import { fetchSongsLasts } from "@/store/features/lastSongSlice";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { deleteSong } from "@/store/features/deleteSongSlice";

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
    const idUser = useSelector((state: any) => state.authentication.idUser);
    const deletedStatus = useAppSelector((state) => state.deleteSong.status)
    const [isClient, setIsClient] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsClient(true)
      }, [])

    useEffect(() => {
        dispatch(fetchSongsLasts(token));
    }, []);

    const handleDeleteSong = (e:any, id: any) => {
        dispatch(deleteSong({id: id, token: token}));
        e.stopPropagation();
        setIsDeleting(true);
    };

    useEffect(() => {
        if (deletedStatus === 'succeeded' && isDeleting) {
            dispatch(fetchSongsLasts(token));
            setIsDeleting(false);
        }
    }, [deletedStatus, dispatch, isDeleting, setIsDeleting]);
    
    return (
        <StyledRecentMusicMolecule>
            
            <Typography.Title>Musiques ajoutées récemment :</Typography.Title>
            {songs.status === 'loading' && <CircularProgress sx={{marginLeft:"45%"}}/>}
            {songs.status === 'succeeded' && songs.songs.map((song: any) => (
                <MusicItem key={song.id} idUser={idUser} title={song.title} author={song.author} username={song.owner.username} ownerId={song.owner.id} file={song.downloadedFile} id={song.id} onDelete={handleDeleteSong}></MusicItem>
            ))}

        </StyledRecentMusicMolecule>
    )
}

export default RecentMusicsMolecule;