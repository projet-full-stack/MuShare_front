import { Logo } from "@/component/atoms/Typography";
import AddSongMolecule from "@/component/molecules/addSongMolecule/AddSongMolecule";
import { styled } from "styled-components";

const StyledDiv = styled.div`
position: absolute;
    margin-top: 1rem;
    margin-left: 17rem;
    display: flex;
    flex-direction: column;
}`
;

function AddSongOrganism() {
    return (
        <>
            <Logo />
            <StyledDiv>
                <AddSongMolecule />
            </StyledDiv>
        </>
    )
}

export default AddSongOrganism;