import NavbarElementMolecule from "@/component/molecules/navbarMolecule/NavbarElementMolecule";
import styled  from "styled-components";

const StyledDiv = styled.div`
    position: absolute;
    margin-top: 7rem;
    background-color: #222222;
    border: solid;
    border-radius: 10px;
    max-width: max-content;
    max-height: max-height;
    padding-right: 100px;
`;

function NavbarOrganism() {
  return (
    <StyledDiv>
      <NavbarElementMolecule icon='home' alt='Accueil' text="Accueil" location="/"/>
      <NavbarElementMolecule icon='search' alt='Rechercher' text="Rechercher" location="/"/>
      <NavbarElementMolecule icon='account_circle' alt='Profil' text="Profil" location="/profil"/>
    </StyledDiv>
  );
} 

export default NavbarOrganism;