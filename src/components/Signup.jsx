import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    let navigate = useNavigate()

    const submitDetails = () => {
        let details = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
        const endpoint = "http://localhost:5555/user/student"
        // console.log(details);
        axios.post(endpoint,details)
        .then((response)=>{
            console.log(response.data);
            setmessage(response.data.message)
            if(response.data.status){
                setfirstname("")
                setlastname("")
                setemail("")
                setpassword("")
                navigate('/signin')
            }
        })
        .catch((err)=>{
            setmessage(err)
        })
    }
  return (
		<>
            {
                message ? <div className="alert alert-success text-center">{message}</div> : null
            }
            <div className="col-8 mx-auto">
                <div className="form-group my-3">
                    <input
                        type="text"
                        placeholder="firstname"
                        onChange={(e) => setfirstname(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className="form-group my-3">
                    <input
                        type="text"
                        placeholder="lastname"
                        onChange={(e) => setlastname(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className="form-group my-3">
                    <input
                        type="text"
                        placeholder="email"
                        onChange={(e) => setemail(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className="form-group my-3">
                    <input
                        type="text"
                        placeholder="password"
                        onChange={(e) => setpassword(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className="form-group my-3">
			        <button onClick={submitDetails} className='btn btn-dark w-100'>submit</button>
                </div>
            </div>
		</>
	);
}

export default Signup