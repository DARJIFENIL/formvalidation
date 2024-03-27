// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import SIgn_img from './SIgn_img'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {

//     const history = useNavigate();

//     const [inpval, setInpval] = useState({
//         email: "",
//         password: ""
//     })

//     const [data, setData] = useState([]);
//     console.log(inpval);

//     const getdata = (e) => {
//         // console.log(e.target.value);


//         const { value, name } = e.target;
//         // console.log(value,name);


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }

//     const addData = (e) => {
//         e.preventDefault();

//         const getuserArr = localStorage.getItem("useryoutube");
//         console.log(getuserArr);

//         const { email, password } = inpval;
//         if (email === "") {
//             toast.error('email field is requred', {
//                 position: "top-center",
//             });
//         } else if (!email.includes("@")) {
//             toast.error('plz enter valid email addres', {
//                 position: "top-center",
//             });
//         } else if (password === "") {
//             toast.error('password field is requred', {
//                 position: "top-center",
//             });
//         } else if (password.length < 5) {
//             toast.error('password length greater five', {
//                 position: "top-center",
//             });
//         } else {

//             if (getuserArr && getuserArr.length) {
//                 const userdata = JSON.parse(getuserArr);
//                 const userlogin = userdata.filter((el, k) => {
//                     return el.email === email && el.password === password
//                 });

//                 if (userlogin.length === 0) {
//                     toast.error("invalid details",{
//                         position:"top-center",
//                     });
                    
//                 } else {
//                     toast.error("user login succesfulyy");

//                     localStorage.setItem("user_login", JSON.stringify(userlogin))

//                     history("/details")
//                 }
//             }
//         }

//     }

//     return (
//         <>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Sign IN</h3>
//                         <Form >

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
//                     </div>
//                     <SIgn_img />
//                 </section>  
//                 <ToastContainer />
//             </div>
//         </>
//     )
// }

// export default Login
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import SIgn_img from './SIgn_img';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const userLoginData = localStorage.getItem('user_login');
        if (userLoginData) {
            const { email, password } = JSON.parse(userLoginData);
            setInpval({ email, password });
        }
    }, []);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem('useryoutube');

        const { email, password } = inpval;
        if (email === '') {
            toast.error('email field is required', { position: 'top-center' });
        } else if (!email.includes('@')) {
            toast.error('please enter a valid email address', { position: 'top-center' });
        } else if (password === '') {
            toast.error('password field is required', { position: 'top-center' });
        } else if (password.length < 5) {
            toast.error('password length should be at least five characters', { position: 'top-center' });
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el) => el.email === email && el.password === password);

                if (userlogin.length === 0) {
                    toast.error('invalid details', { position: 'top-center' });
                } else {
                    toast.success('user login successful');
                    localStorage.setItem('user_login', JSON.stringify(userlogin));
                    history('/details');
                }
            }
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
                        <h3 className="text-center col-lg-6">Sign IN</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" value={inpval.email} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" value={inpval.password} />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className="col-lg-6"
                                onClick={addData}
                                style={{ background: 'rgb(67, 185, 127)' }}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">Already Have an Account <span>SignIn</span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;
