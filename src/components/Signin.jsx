import React from 'react'

const Signin = () => {
    const submitDetails = () => {
        alert('I am working confidently')
    }
  return (
    <>
        <div className="col-8 mx-auto">
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
  )
}

export default Signin