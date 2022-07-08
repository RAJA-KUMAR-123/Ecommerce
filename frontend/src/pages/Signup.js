import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password });
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSignup}>
                        <h1>Create an account</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>


                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Create account
                            </Button>
                        </Form.Group>
                        <p className="pt-3 text-center">
                            Don't have an account? <Link to="/login">Login</Link>{" "}
                        </p>
                    </Form>
                </Col>
                <Col md={6} className="signup__image--container"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
























// import React ,{useState} from 'react'
// import { Container,Col,Row,Button,Form,Alert } from 'react-bootstrap'
// import {Link } from "react-router-dom"
// import {useSignupMutation} from "../services/appApi";
// import"./Signup.css"

// function Signup() {
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [name,setName]=useState("");
//     const [signup,{error,isLoading,isError}] = useSignupMutation();
// function handleSignup(e){

//     e.preventDefault();
//     signup({name,email,password});
// }

//   return (
//     <Container>
//         <Row>
//             <Col md={6} className="login__form--container">
//                 <Form className="" style={{width: "100%"}} onSubmit={handleSignup}>
//                     <h1>Create an Account</h1>
//                     {isError && <Alert variant="danger"> {error.data}</Alert> }
//                     <Form.Group>
//                         <Form.Label>
//                             Name
//                         </Form.Label>
//                         <Form.Control type="text" placeholder="Enter your name" value={name} require onChange={(e)=>setName(e.target.value)} />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>
//                             Email Address
//                         </Form.Label>
//                         <Form.Control type="email" placeholder="Email" value={email} require onChange={(e)=>setEmail(e.target.value)} />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>
//                              Password
//                         </Form.Label>
//                         <Form.Control type="password" placeholder="Password" value={password} require onChange={(e)=>setPassword(e.target.value)}/>
//                     </Form.Group>

//                     <Form.Group>
//                         <Button type="submit" disabled={isLoading}>Create Account</Button>
//                         <p>
//                         Don't have an account ! 
//                         <Link to = "login">Login</Link>{" "}
//                     </p>
            
//                     </Form.Group>
                   
//                 </Form>
            
//             </Col>
//             <Col md={6} className="signup_image__container"></Col>
//         </Row>
//     </ Container>
//   )
// }

// export default Signup