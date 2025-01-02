import React from 'react'
import BlockAnimate from './BlockAnimate'

const BlocksFollow = ({scroll}) => {
  return (
    <>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
        <BlockAnimate scroll={scroll} initY={800} endY={-400} initR={-50} endR={0}/>
    </>
  )
}

export default BlocksFollow