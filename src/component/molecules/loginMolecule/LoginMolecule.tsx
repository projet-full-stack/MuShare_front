'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/component/atoms/Button'
import Container from '@/component/atoms/Container'
import Input from '@/component/atoms/Input'
import Typography from '@/component/atoms/Typography'
import { useAppDispatch } from '@/app/hooks'
import { authenticate } from '@/store/features/authenticationSlice'
import { useSelector } from 'react-redux'

const LoginMolecul = () => {

    const dispatch = useAppDispatch();

    const login = useRef()
    const password = useRef()
    const router = useRouter()
    const handleLogin = () => {
        const loginValue = login.current.value
        const passwordValue = password.current.value
        const auth = {username: loginValue, password: passwordValue}
        console.log("JPP")
        dispatch(authenticate(auth)).then(() => {
            router.push('/')
        })
    }

    return (
        <Container.CenterDiv $margintop='10rem'>
            <Input.InputField ref={login} placeholder="Nom d'utilisateur" type="text" width="20rem" height="3rem" margin="0 0 2rem 0" />
            <Input.InputField ref={password} placeholder='Mot de passe' type="password" width="20rem" height="3rem" />
            <Button.AuthButton onClick={handleLogin} width="15rem" height="3rem" location="/profil">Se connecter</Button.AuthButton>
            <Typography.Link href="/register">Pas de compte ? S'inscrire</Typography.Link>
        </Container.CenterDiv>
    )
}

export default LoginMolecul