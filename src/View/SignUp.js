import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { createUser, loginRequest } from '../Api/Fetch';
// NEED STORE 

const NewAccount = () => {
    const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData.username, formData.displayName, formData.password)
      .then(() => (
        loginRequest(formData.username, formData.password)
      ))
      .then((userData) => dispatch({ type: actions.LOGIN, payload: userData }));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({...state, [inputName]: inputValue}));
  };
  

    return (
        <div className="colorbg">
          {user.token && <Redirect to="/" />}
          <div id="newaccount-form">
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>            
              <Form.Field>
                <label>Username</label>
                <input
                type="text"
                name="username"
                value={formData.username}
                autoFocus
                required
                onChange={handleChange} 
                pattern= ".{3,}"
                placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Display Name</label>
                <input 
                type="text"
                name="displayName"
                value={formData.displayName}
                autoFocus
                required
                onChange={handleChange}
                pattern= ".{3,}"
                placeholder="Display Name" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                type="password" 
                name="password"
                value={formData.password}
                autoFocus
                required
                onChange={handleChange}
                pattern= ".{3,}"
                placeholder="Password" />
              </Form.Field>
            
              <Button 
              type="submit">Submit</Button>
    
            </Form>
          </div>
        </div>
      );
    };
    
    export default NewAccount;
    