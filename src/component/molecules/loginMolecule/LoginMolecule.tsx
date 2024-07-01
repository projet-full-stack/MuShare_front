'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Container, Input, Typography } from '@/component/atoms'

const LoginMolecul = () => {

    const router = useRouter()

    return (
        <Container.CenterDiv $margintop='10rem'>
            <Input.InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="3rem" margin="0 0 2rem 0" />
            <Input.InputField placeholder='Mot de passe' type="password" width="20rem" height="3rem" />
            <Button.AuthButton width="15rem" height="3rem" location="/profil">Se connecter</Button.AuthButton>
            <Typography.Link href="/register">Pas de compte ? S'inscrire</Typography.Link>
        </Container.CenterDiv>
    )
}

export default LoginMolecul