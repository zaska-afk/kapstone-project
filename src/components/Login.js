import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useStore from "../store";

function Login(props) {
  const loginRequest = useStore((state) => state.loginRequest);
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      if (userData.statusCode === 201) history.push("/home");
    });
  };

  const handleChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="bg-color">
      <div id="login-form">
        <h2>Login</h2>
        <br />
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              autoFocus
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="warning">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
