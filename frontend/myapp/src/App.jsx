import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [count, setCount] = useState([])
useEffect(()=>{
  axios.get('/api/content')
  .then((response)=>{
    setCount(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
      <h1>hii arpit pandey</h1>
      {
        count.map((data,index)=>(
          <div key={index}>
            <h1>{data.title}</h1>
          </div>
        ))
      }
    </>
  )
}

export default App
