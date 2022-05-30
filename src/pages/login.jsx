import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

function Login() {

  const {users,loginedUser,setLoginedUser} = useContext(Context);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = users.filter(
      (obj) => obj.email === email && obj.password === password
    );
    if (user.length > 0) {
      let logined=[...loginedUser]
      console.log(user)
      logined.push({
        name:user[0].name,
        id:user[0].id,
        email:user[0].email
      })
      setLoginedUser(logined)
      console.log(logined)
      navigate("/");
    }
    setError(true);
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formError">
          {error ? (
            <>
              <Form.Label>email or password is inncorrect</Form.Label>
            </>
          ) : (
            <></>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
