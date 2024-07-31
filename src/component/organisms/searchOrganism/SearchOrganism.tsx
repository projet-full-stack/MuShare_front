import SearchBarMolecule from "@/component/molecules/searchMolecule/SearchBarMolecule";
import SearchSongsMolecule from "@/component/molecules/searchMolecule/SearchSongs";
import { useState } from "react";
import styled from "styled-components";
import ReaderOrganism from "../readerOrganism/readerOrganism";

const StyledDiv = styled.div`
position: absolute;
    margin-top: 1rem;
    margin-left: 17rem;
}`
;

function SearchOrganism() {
    const [value, setValue] = useState('');
    return (
        <>
        <StyledDiv>  
            <SearchBarMolecule value={value} setValue={setValue}/>
        </StyledDiv>
        <SearchSongsMolecule value={value}/>
        <ReaderOrganism />
        </>
    )
}

export default SearchOrganism;