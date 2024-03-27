
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//     const navigate = useNavigate();

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         date: "",
//         password: ""
//     });

//     const getdata = (e) => {
//         const { value, name } = e.target;

//         setInpval((prevInputVal) => ({
//             ...prevInputVal,
//             [name]: value
//         }));
//     };
    

//     const addData = (e) => {
//         e.preventDefault();

//         const { name, email, date, password } = inpval;

//         if (name === "") {
//             toast.error('name field is required!', { position: "top-center" });
//         } else if (email === "") {
//             toast.error('email field is required', { position: "top-center" });
//         } else if (!email.includes("@")) {
//             toast.error('please enter a valid email address', { position: "top-center" });
//         } else if (date === "") {
//             toast.error('date field is required', { position: "top-center" });
//         } else if (password === "") {
//             toast.error('password field is required', { position: "top-center" });
//         } else if (password.length < 5) {
//             toast.error('password length must be greater than five', { position: "top-center" });
//         } else {
//             console.log("data added successfully");
//             const newUser = { name, email, date, password };
//             const storedData = JSON.parse(localStorage.getItem('useryoutube')) || [];
//             storedData.push(newUser);
//             localStorage.setItem('useryoutube', JSON.stringify(storedData));
//             setInpval({
//                 name: "",
//                 email: "",
//                 date: "",
//                 password: ""
//             });
//             toast.error('User registered successfully', { position: "top-center" });
//             navigate("/login");
//         }
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Register</h3>
//                         <Form>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control onChange={getdata} name='date' type="date" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Register
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
//                     </div>
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     );
// };

// export default Register;

// Register.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Display from './Display';
const Register = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = userData;

        if (name === "" || email === "" || date === "" || password === "") {
            toast.error('All fields are required!', { position: "top-center" });
        } else if (!email.includes("@")) {
            toast.error('Please enter a valid email address', { position: "top-center" });
        } else if (password.length < 5) {
            toast.error('Password length must be at least five characters', { position: "top-center" });
        } else {
            console.log("data added successfully");
            const newUser = { name, email, date, password };
            const storedData = JSON.parse(localStorage.getItem('useryoutube')) || [];
            storedData.push(newUser);
            localStorage.setItem('useryoutube', JSON.stringify(storedData));
            setUserData({
                name: "",
                email: "",
                date: "",
                password: ""
            });
            toast.success('User registered successfully', { position: "top-center" });
            navigate("/login");
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Register
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default Register;



