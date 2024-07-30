import React from 'react'

function Svg(props: any) {
  return (
    <svg onClick={() => props.onClick()} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" height={props.height}
                viewBox="0 -960 960 960" width={props.width} fill="#FFFFFF">
                <path d={props.path} />
            </svg>
  )
}

export default Svg