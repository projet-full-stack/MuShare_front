import { Button, Container, Input, Typography } from '@/component/atoms'
import React from 'react'

function RegisterMolecul() {
  return (
    <Container.CenterDiv $height="40rem" $margintop='3rem' $width='30rem'>
      <Input.InputField placeholder="Email" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField placeholder='Mot de passe' type="password" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField placeholder='Confirmer le mot de passe' type="password" width="20rem" height="2rem" />
      <Button.AuthButton width="15rem" height="3rem">S'inscrire</Button.AuthButton>
      <Typography.Link href="/login">Déjà un compte ? Connectez-vous</Typography.Link>
    </Container.CenterDiv>
  )
}

export default RegisterMolecul