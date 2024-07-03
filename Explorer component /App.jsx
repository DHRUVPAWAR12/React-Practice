import React from 'react'
import Explorer from './component/Explorer'
import { data } from './constants/data'
const App = () => {
  return (
   <Explorer data={data} />
  )
}

export default App
