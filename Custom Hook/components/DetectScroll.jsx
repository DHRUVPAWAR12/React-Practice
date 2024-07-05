import React from 'react'
import useScrollDetection from '../hooks/useScrollDetection'
const DetectScroll = () => {
    const scrollDirection = useScrollDetection();
  return (
    <>
        <h1>Scroll Direction: {scrollDirection}</h1>
        
    </>
)
}

export default DetectScroll;