import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useStore from "../store";

const SignUp = (props) => {
  const setCreateUser = useStore((state) => state.createUser);
  const loginRequest = useStore((state) => state.loginRequest);
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setCreateUser(formData.username, formData.email, formData.password);
    const loginData = await loginRequest(formData.username, formData.password);
    console.log(loginData);
    loginData.user._id ? history.push("/survey") : history.push("/");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="colorbg">
      <div id="newaccount-form">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              autoFocus
              required
              onChange={handleChange}
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              autoFocus
              required
              onChange={handleChange}
              placeholder="Display Name"
            />
          </Form.Group>
          <Form.Group>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              autoFocus
              required
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>

          <Button type="submit" variant="warning">
            Create New Account
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
