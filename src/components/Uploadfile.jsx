import axios from 'axios';
import React, { useState } from 'react'

const Uploadfile = () => {
    const [myImage, setmyImage] = useState("");
    const [cloudImage, setcloudImage] = useState("")
    const changeFile = (e) => { 
        console.log(e.target.files[0]);
        let myImage = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(myImage);
        reader.onload = () => {
            setmyImage(reader.result);
        }
        
    }

    const endpoint = "http://localhost:5555/user/cloud"
    const saveFile = () => {
        axios.post(endpoint, {myImage})
        .then((response)=>{
            console.log(response.data);
            console.log(response.data.cloudLink);
            setcloudImage(response.data.cloudLink);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
        <input type="file" name="" id="" onChange={(e)=>changeFile(e)} />
        <button onClick={saveFile}>Upload</button>
        {/* <img src="https://res.cloudinary.com/dxgvsnxsj/image/upload/v1667460884/samples/ecommerce/leather-bag-gray.jpg" alt="" /> */}
        <img width={100} src={cloudImage} alt="" />
    </>
  )
}

export default Uploadfile