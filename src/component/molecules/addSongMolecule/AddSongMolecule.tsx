import { useAppDispatch } from "@/app/hooks";
import { AuthButton } from "@/component/atoms/Button";
import FormButton from "@/component/atoms/Button/FormButton";
import { InputField } from "@/component/atoms/Input";
import { Icon } from "@/component/atoms/Media";
import { Title } from "@/component/atoms/Typography";
import { createSong } from "@/store/features/createSong";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
}`;

function AddSongMolecule() {
    const [file, setFile] = useState<File>();
    const dispatch = useAppDispatch();

    const [song, setSong] = useState<any>();


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e);
            setSong({...song, file: e.target.files[0]});
        }
      };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => { 
        console.log(e);
        setSong({...song, title: e});
    }

    const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSong({...song, author: e});
    }



    return (
        <>
            <Title> Add a song </Title>
            
            <StyledDiv>
                <InputField placeholder="Title" setValue={handleTitleChange}/>
                <InputField placeholder="Author" setValue={handleAuthorChange}/>

                <input type="file" onChange={handleFileChange}/>
                <div style={{color: 'white'}}>{song.file && `${song.file.name} - ${song.file.type}`}</div>
                <Icon icon="upload_file" hover="white"/>
                <FormButton onClick =  {() =>{dispatch(createSong(song))}}>Add Song</FormButton>
*            </StyledDiv>
           
        </>
    )
}

export default AddSongMolecule;