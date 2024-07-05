import React from 'react'
import DetectScroll from './components/DetectScroll'
const App = () => {
  return (
    <div className='App'>
          {Array.from({ length: 50 }, (_, i) => (
               <DetectScroll key={i} />
          ))}
    </div>
  )
}

export default App