import React from 'react'
import LoginDiv from '@/component/atoms/Container/loginDiv'
import InputField from '@/component/atoms/inputField/InputField'
import Button from '@/component/atoms/Button/Button'
import Link from '@/component/atoms/Typography/Link'

function LoginMolecul() {
    return (
        <LoginDiv $margintop='10rem'>
            <InputField placeholder="Nom d'utilisateur" type="text" width="20rem" height="3rem" margin="0 0 2rem 0" />
            <InputField placeholder='Mot de passe' type="password" width="20rem" height="3rem" />
            <Button width="15rem" height="3rem">Se connecter</Button>
            <Link href="/register">Pas de compte ? S'inscrire</Link>
        </LoginDiv>
    )
}

export default LoginMolecul