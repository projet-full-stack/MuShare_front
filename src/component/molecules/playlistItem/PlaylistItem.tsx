import React from 'react'

function PlaylistItem({id = "", title = "", nbMusic = "", nbFollowers = "", depositor = ""}) {
    return (
        <tr style={{textAlign:"center"}} key={id}>
            <td style={{width:"2rem"}}>{id}</td>
            <td style={{width:"7rem"}}>{title}</td>
            <td style={{width:"2rem"}}>{nbMusic}</td>
            <td style={{width:"2rem"}}>{nbFollowers}</td>
            <td style={{width:"3rem"}}>{depositor}</td>
        </tr>
    )
}

export default PlaylistItem