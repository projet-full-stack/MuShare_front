import Button from '@/component/atoms/Button/Button'
import LoginDiv from '@/component/atoms/Container/loginDiv'
import InputField from '@/component/atoms/inputField/InputField'
import Link from '@/component/atoms/Typography/Link'
import React from 'react'

function RegisterMolecul() {
  return (
    <LoginDiv $height="40rem" $margintop='3rem' $width='30rem'>
      <InputField placeholder="Email" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <InputField placeholder='Mot de passe' type="password" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <InputField placeholder='Confirmer le mot de passe' type="password" width="20rem" height="2rem" />
      <Button width="15rem" height="3rem">S'inscrire</Button>
      <Link href="/login">Déjà un compte ? Connectez-vous</Link>
    </LoginDiv>
  )
}

export default RegisterMolecul