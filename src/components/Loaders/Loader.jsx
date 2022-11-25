import React from 'react'
import { JellyTriangle } from '@uiball/loaders'
import "./loader.css"


function Loader() {
  return (
    <div className='loader'><JellyTriangle size={120} speed={1.75} color="white"/>;</div>
  )
  
}

export default Loader;