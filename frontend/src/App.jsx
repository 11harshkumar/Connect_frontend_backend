import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [records, setRecords] = useState([])
  useEffect(() => {
    axios.get('/api/records')
      .then((response) => {
          setRecords(response.data)
      })
      .catch((error) => {
          console.log(error)
    })
  })

  return (
    <>
      <h1>Frontend - Backend | Youtube</h1>
      <p>Records : {records.length}</p>
      {
        records.map((record, index) => (
          <div key={record.id}>
            <h3>{record.studName}</h3>
            <p>{ record.place}</p>
          </div>
        ))
      }
    </>
  )
}

export default App