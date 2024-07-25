import React from 'react'
import PlaylistItem from '../playlistItem/PlaylistItem'

function PlaylistTable(props: any) {
    return (
        <table style={{borderCollapse:"collapse", color:"white"}}>
            <thead style={{ borderBottom:"solid 1px black", marginBottom:"1rem" }}>
                <tr>
                    <th>Id</th>
                    <th>Titre</th>
                    <th>Nombre de musiques</th>
                    <th>Nombre de suivant</th>
                    <th>Depositaire</th>
                </tr>
            </thead>
            <tbody >
                {props.playlists.map((item: any) => {
                    return (
                        <PlaylistItem id={item.id} title={item.title} nbMusic={item.songs.length} nbFollowers={item.follows.length} depositor={item.owner.username} />
                    )

                })}
            </tbody>
        </table>
    )
}

export default PlaylistTable