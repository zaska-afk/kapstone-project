import React, { useState } from 'react';
import { loginRequest } from '../API/Fetch';
import { Button, Form } from 'semantic-ui-react';

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (event) => {
    event.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      dispatch({ type: actions.LOGIN, payload: userData });
      if (userData.statusCode === 200) history.push('/');
    });
  };

  const handleChange = (event) => {
    setFormData((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  
  return (
    <div className="bg-color">
      <div id="login-form">
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
          <Form.Field>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              autoFocus
              required
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <hr />
        <Link to="/signup">
          <Button id="create-account" type="button">
            Create New Account
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
