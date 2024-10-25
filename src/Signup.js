import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Signup() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        mobileNumber: '',
        fax: '',
        phone: ''
    });
console.log("frm",formData)
    const [errors, setErrors] = useState({});
    // const history = useHistory();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};

        // First Name
        if (!formData.firstName) {
            tempErrors.firstName = 'First Name is required';
        } else if (formData.firstName.length < 2) {
            tempErrors.firstName = 'First Name must be at least 2 characters';
        }

        // Last Name
        if (!formData.lastName) {
            tempErrors.lastName = 'Last Name is required';
        } else if (formData.lastName.length < 2) {
            tempErrors.lastName = 'Last Name must be at least 2 characters';
        }

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
        } else if (formData.password.length < 8) {
            tempErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
            tempErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }

        // Confirm Password
        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords must match';
        }

        // Address
        if (!formData.address) {
            tempErrors.address = 'Address is required';
        }

        // Country
        if (!formData.country) {
            tempErrors.country = 'Country is required';
        }

        // State
        if (!formData.state) {
            tempErrors.state = 'State is required';
        }

        // City
        if (!formData.city) {
            tempErrors.city = 'City is required';
        }

        // Pincode (assuming it's a 6-digit number)
        const pincodeRegex = /^[0-9]{6}$/; // Basic pincode regex
        if (!formData.pincode) {
            tempErrors.pincode = 'Pincode is required';
        } else if (!pincodeRegex.test(formData.pincode)) {
            tempErrors.pincode = 'Pincode must be a 6-digit number';
        }

        // Mobile Number (assuming it's a valid 10-digit number)
        const mobileRegex = /^[0-9]{10}$/; // Basic mobile number regex
        if (!formData.mobileNumber) {
            tempErrors.mobileNumber = 'Mobile Number is required';
        } else if (!mobileRegex.test(formData.mobileNumber)) {
            tempErrors.mobileNumber = 'Mobile Number must be a 10-digit number';
        }

        // Fax
        if (!formData.fax) {
            tempErrors.fax = 'Fax is required';
        }
        else if (formData.fax && !/^[0-9]*$/.test(formData.fax)) {
            tempErrors.fax = 'Fax must be a number';
        }

        // Phone
        if (!formData.phone) {
            tempErrors.phone = 'phone is required';
        }
        if (formData.phone && !/^[0-9]*$/.test(formData.phone)) {
            tempErrors.phone = 'Phone must be a number';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

  
    console.log(errors);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Store user data or perform signup logic
            navigate('/login'); // Redirect to login
        }
    };
    console.log("loc", location)
    const path = location.pathname;
    return (
        <div className="container">
            {/* <h2>Signup</h2> */}

            <form onSubmit={handleSubmit}>
                <div className='form-group row'>

                    <Link className={path === '/' ? "act btn col-5" : "btn btn-info col-5 rounded"} to={"/login"}>
                        Login
                    </Link>
                    <Link className="btn btn-info  col-5 rn" to={"/"}>
                        Signup
                    </Link>

                </div>


                <div className='form-group row'>
                    <div className='form-group col-10'>
                        
                            <label>Individual/Enterprise/Government</label>
                            <div className='col-10 d-flex' style={{ justifyContent: "space-between" }}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Individual
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Enterprise
                                    </label>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Government
                                    </label>
                            </div>
                        </div>
                    </div>
                
                   
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
                </div>
                <div className='form-group row'>
                    <div className="form-group col-5">
                        <label>First Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="form-group col-5">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="form-group col-10">
                        <label>Address</label>
                        <input
                            type="text"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="form-group col-5">
                        <label>Country</label>
                        <select
                            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                        </select>
                        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>

                    <div className="form-group col-5">
                        <label>State</label>
                        <select
                            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            <option value="CA">California</option>
                            <option value="DL">Delhi</option>
                        </select>
                        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="form-group col-5">
                        <label>City</label>
                        <select
                            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            <option value="LA">Los Angeles</option>
                            <option value="NY">New York</option>
                        </select>
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>

                    <div className="form-group col-5">
                        <label>Pincode</label>
                        <input
                            type="text"
                            className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                        {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="form-group col-10">
                        <label>Mobile Number</label>
                        <div className='d-flex'>
                            <input
                                type="text"
                                // className={`form-control col-4 ${errors.mobileNumber ? 'is-invalid' : ''}`}
                                name="mobileNumber"
                                // value={formData.mobileNumber}
                                // onChange={handleChange}
                            />
                            <input
                                type="text"
                                className={`form-control col-8 ${errors.mobileNumber ? 'is-invalid' : ''}`}
                                name="mobileNumber" // Change the second mobile input name
                                value={formData.mobileNumber}
                                onChange={handleChange}
                            />

                        </div>
                        {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}

                    </div>

                </div>
                <div className='form-group row'>
                    <div className="form-group col-5">
                        <label>Fax</label>
                        <input
                            type="text"
                            className={`form-control ${errors.fax ? 'is-invalid' : ''}`}
                            name="fax"
                            value={formData.fax}
                            onChange={handleChange}
                        />
                        {errors.fax && <div className="invalid-feedback">{errors.fax}</div>}
                    </div>

                    <div className="form-group col-5">
                        <label>Phone</label>
                        <input
                            type="text"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                </div>
                <div className='form-group row'>
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
                </div>
                <div className='form-group row'>
                    <div className="form-group col-10">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <div className="invalid-feedback">{"Confirm password should be the same as password"}</div>}

                    </div>
                </div>
                <button type="submit" className="btn btn-info mt-3 mb-3 col-10 rn">
                    Signup
                </button>
            </form>
        </div>

    );
}

export default Signup;


