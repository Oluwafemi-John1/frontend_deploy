import axios from 'axios'
import React, { useState } from 'react'

const Loadup = () => {
    const [setFile, setsetFile] = useState("")
    const [image, setimage] = useState("")
    const up = () => {
        // console.log("kll");
        const endpoint = "http://localhost:5555/user/upload"
        axios.post(endpoint,{setFile})
        .then((res)=>{
            console.log(res.data.link);
            setimage(res.data.link)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const changeFile = (e) => {
        let myImage = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(myImage);
        reader.onload = () => {
            // console.log(reader.result);
            setsetFile(reader.result);
        }
    }
  return (
    <>
        <input type="file" onChange={(e)=>changeFile(e)} />
        <button onClick={up}>Upload</button>
        <img src={image} alt="" />
    </>
  )
}

export default Loadup