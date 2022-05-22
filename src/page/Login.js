import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    try{
        const res = await axios.get('/api/');
        // setAuthenticate(true);
        // navigate("/");
        console.log(res)
    } catch(e){
        console.error(e.message)
    }
  }
  const add = async() => {
    // delete 버튼 를릭 시 실행
    try{
        // axios.get 은 두번째 매개변수로 config 전달
        const res = await axios.post('/api/add')
    } catch(e) {
        console.error(e.message)
    }
  }
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={add}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
