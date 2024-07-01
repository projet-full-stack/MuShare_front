import React from 'react'
import { Container, Input } from '@/component/atoms'

const ProfilMolecule = () => {
  return (
    <Container.CenterDiv $width='70rem'>
      <h1 style={{marginRight:"60rem"}}>Profil</h1>
      <Input.InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField placeholder="Email" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField placeholder='Mot de passe' type="password" width="20rem" height="2rem" margin="0 0 2rem 0" />

    </Container.CenterDiv>
  )
}

export default ProfilMolecule