import React from 'react'
import { Container, Input } from '@/component/atoms'

const ProfilMolecule = () => {
  return (
    <Container.CenterDiv $width='50rem' $height='30rem'>
      <h1 style={{margin:"auto"}}>Profil</h1>
      <Input.InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="2rem" margin="auto" />
      <Input.InputField placeholder="Email" type="text" width="20rem" height="2rem" margin="auto" />
      <Input.InputField placeholder='Mot de passe' type="password" width="20rem" height="2rem" margin="auto" />
    </Container.CenterDiv>
  )
}

export default ProfilMolecule