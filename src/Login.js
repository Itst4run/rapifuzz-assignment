import React,{useState} from 'react';
import { useNavigate,Link ,useLocation} from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''})

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const validateForm = () => {
        let tempErrors = {};
    
    
        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
    
        // Password
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } 
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Store user data or perform signup logic
            navigate('/products'); // Redirect to productview
        }

    };
    const location = useLocation();

    const path= location.pathname;

    return (
        <div className="container">
            {/* <h2>Login</h2> */}
            <div className='form-group row '>
            
            <Link className="btn btn-info col-5 rounded rn" to={"/login"}>
      Login  
           </Link>
           <Link className={path==='/login'?"act btn col-5":"btn btn-info col-5 rounded"} to={"/"}>
      Signup   
           </Link>

        </div>
            <form onSubmit={handleLogin}>
                <div className="form-group col-10">
                <label>Email</label>
                <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group col-10">
                <label>Password</label>
                <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback">{`Must contain at least one number, one uppercase, and lowercase letter, and at least 8 or more characters`}</div>}

                </div>
                <div className='row'>
                <Link href="#" className='col-12' to={"/forget"}>Reset here</Link>

                </div>
                <button type="submit" className="btn btn-info col-10 rn">Login</button>
            </form>
           
            
        </div>
    );
}

export default Login;
