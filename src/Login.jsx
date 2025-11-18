import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === "admin" && pass === "1234") {  
            navigate('/crud');
        } else {
        alert ('usuario y contraseña incorrectos');
        }   
    };

    return (    
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Row className="w-100"> 
                <col />md={6} lg={4} className="mx-auto">
                    <Card className="shadow-lg" style={{ width: '18rem' }}>
                        <Card.Body>
                            <h2 className="">



                            </h2>
export default Login;

