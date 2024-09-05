import React from 'react'
import Acollapse from './transcomponents/Acollapse'
import FadeExample from './transcomponents/Bfade'
import GrowExample from './transcomponents/Cgrow'
import SlideExample from './transcomponents/Dslide'

const page = () => {
  return (
    <>
    Transitions
    <Acollapse/>
    <FadeExample/>
    <GrowExample/>
    <SlideExample/>
      
    </>
  )
}

export default page
