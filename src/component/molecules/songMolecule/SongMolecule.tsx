import { Container } from '@/component/atoms'
import React from 'react'

function SongMolecule() {
  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"2rem", marginLeft:"3rem"}}>
        <Container.RandomDiv >
            <h1>Sons</h1>
        </Container.RandomDiv>
    </div>
  )
}

export default SongMolecule