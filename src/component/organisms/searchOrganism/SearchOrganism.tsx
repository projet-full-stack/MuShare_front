import { Logo } from "@/component/atoms/Typography";
import SearchBarMolecule from "@/component/molecules/searchMolecule/SearchBarMolecule";
import SearchSongsMolecule from "@/component/molecules/searchMolecule/SearchSongs";
import { useState } from "react";
import styled from "styled-components";

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
        <Logo />
        <StyledDiv>  
            <SearchBarMolecule value={value} setValue={setValue}/>
        </StyledDiv>
        <SearchSongsMolecule value={value}/>

        </>
    )
}

export default SearchOrganism;