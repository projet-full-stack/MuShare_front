import React, { EventHandler, useEffect, useRef, useState } from 'react'
import Container from '@/component/atoms/Container'
import Input from '@/component/atoms/Input'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/app/hooks'
import { fetchUserByLogin } from '@/store/features/userSlice'
import { CircularProgress } from '@mui/material'
import Button from '@/component/atoms/Button'
import { updateUser } from '@/store/features/updateUserSlice'

const ProfilMolecule = () => {
  const userInfo = useSelector((state: any) => state.authentication)
  const user = useSelector((state: any) => state.user.user)
  const dispatch = useAppDispatch()
  
  //const regExp = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')

  const [username, setUsername] = useState<any>();
  const [email, setEmail] = useState<any>();

  const [isLoaded, setIsLoaded] = useState<any>();

  useEffect(() => {
    dispatch(fetchUserByLogin({ token: userInfo.token, login: userInfo.login })).then((res) => {
      setUsername(res.payload.username);
      setEmail(res.payload.email);
      setIsLoaded(res.meta.requestStatus)
      console.log(res)
    })
  }, [])

  function handleChangeUsername(e: any) {
    setUsername(e.target.value)
  }

  function handleChangeEmail(e: any) {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  function handleClickUpdate() {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      console.log("Email valide")
      console.log(user)
      const item = {id: user.id, username: username, email: email, token: userInfo.token}
      console.log(item)
      dispatch(updateUser(item)).then(() => {
        alert("Modifications enregistrées")
      })
    }
    else {
      console.log("Email invalide")
    }
  }

  return (
    <Container.RandomDiv $width='50rem' $height='30rem' $color='white' $margin='3rem 0 0 20rem'>
      <h1 style={{ margin: "auto" }}>Profil</h1>
      
      {isLoaded === "fulfilled" &&
        <>
          <Input.InputField placeholder="Nom d'utilisateur" value={username} type="text" width="20rem" height="2rem" margin="auto" onChange={handleChangeUsername}/>
          <Input.InputField $disabled={true} placeholder="Email" type="text" value={email} width="20rem" height="2rem" margin="auto" onChange={handleChangeEmail}/>
          <Button.FormButton type="submit" children="Enregistrer les modifications" margin="auto" onClick={handleClickUpdate}/>
        </>
      }
      {!isLoaded && 
        <CircularProgress style={{ margin: "auto" }} />
      }
    </Container.RandomDiv>
  )
}

export default ProfilMolecule