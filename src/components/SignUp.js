import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { createUser, loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store";

const SignUp = () => {
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(
      formData.username,
      formData.displayName,
      formData.password
    );
    const loginData = await loginRequest(formData.username, formData.password);
    dispatch({ type: LOGIN, payload: loginData });
    loginData.token ? history.push("/survey") : history.push("/");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="colorbg">
      <div id="newaccount-form">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <br />
          <Form.Group>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              autoFocus
              required
              onChange={handleChange}
              pattern=".{3,}"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <label>Display Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              autoFocus
              required
              onChange={handleChange}
              pattern=".{3,}"
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
              pattern=".{3,}"
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
