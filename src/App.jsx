import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import Signup from './components/Signup'
import Loadup from './components/Loadup'
import Classbased from './components/Classbased'
import Uploadfile from './components/Uploadfile'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'

function App() {
    const getData = () => {
        const endpoint = "http://localhost:5555/user"
        // alert('I am working confidently')
        axios.get(endpoint)
        .then((result)=>{
            console.log(result.data);
        })
    }
  return (
    <>
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
        </Routes>
        {/* <button onClick={getData}>Get data</button> */}
        {/* <Signup/> */}
        {/* <Loadup/> */}
        {/* <Classbased/> */}
        {/* <Uploadfile/> */}
    </>
  )
}

export default App
