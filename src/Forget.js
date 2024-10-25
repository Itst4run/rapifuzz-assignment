import React from 'react'
import {useNavigate} from "react-router-dom";
const Forget = () => {
    const navigate= useNavigate();
  return (
    <div className='bg-primary min-vh-100 d-flex justify-content-center  '>
 <div className='bos col-4 bg-white p-2'>
        
        <label>Email</label>
                        <input
                            type="email"
                            className={`form-control`}
                            name="email"
                            value="email"
                            // onChange={handleChange}
                            required
                        />
                        <div className='row'>
<div className='col-12 d-flex justify-content-between'>
    <button className='btn btn-primary mt-2 col-5' onClick={()=>navigate('/')}>Reset Password</button>
    <button className='btn btn-primary mt-2 col-5' onClick={()=>navigate('/login')}>Login/signup</button>

</div>
                        </div>
        </div>
    </div>
   
  )
}

export default Forget