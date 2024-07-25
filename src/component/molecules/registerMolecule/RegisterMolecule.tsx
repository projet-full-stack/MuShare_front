import React, { useRef } from 'react'
import { Button, Container, Input, Typography } from '@/component/atoms'
import { useAppDispatch } from '@/app/hooks'
import { register } from '@/store/features/registerSlice'
import { useSelector } from 'react-redux'

function RegisterMolecul() {

  const email = useRef()
  const username = useRef()
  const password = useRef()

  const dispatch = useAppDispatch()

  const isCreated = useSelector((state: any) => state.register.isCreated)

  const handleSubscription = () => {
    const emailValue = email.current.value
    const usernameValue = username.current.value
    const passwordValue = password.current.value

    const newAccount = {
      email: emailValue,
      username: usernameValue,
      password: passwordValue
    }

    dispatch(register(newAccount))

  }
  if(isCreated){
    alert('Votre compte a été créé avec succès')
  }
  return (
    <Container.CenterDiv $height="40rem" $margintop='3rem' $width='30rem'>
      <Input.InputField ref={email} placeholder="Email" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField ref={username} placeholder="Nom d'utilisateur" type="text" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Input.InputField ref={password} placeholder='Mot de passe' type="password" width="20rem" height="2rem" margin="0 0 2rem 0" />
      <Button.AuthButton onClick={handleSubscription} width="15rem" height="3rem">S'inscrire</Button.AuthButton>
      <Typography.Link href="/login">Déjà un compte ? Connectez-vous</Typography.Link>
    </Container.CenterDiv>
  )
}

export default RegisterMolecul