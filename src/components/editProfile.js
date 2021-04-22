import React, { useEffect, useState } from 'react';
import  useStore  from '../store';
import {  Button, Form}  from 'react-bootstrap';

function editProfile() {
    const user = useStore((state) => state.user);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      Email: '',
    });


const getUserRequest = useStore((state) => state.getUserRequest)
const updateUser = useStore((state) => state.updateUser)

    const syncFormToApi = () => {
        if (user.username)
        getUserRequest(user.username).then((userData) => {
              setFormData((prev) => ({
                ...prev,
                username: userData.user.username,
                email: userData.user.email,
                password: '',
              }));
          });
      };

      useEffect(syncFormToApi, [user]);

      
  const updateForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    updateUser(user.username, formData.password, formData.username, formData.about, user.token)
      .then(() => {
        syncFormToApi();
      });
  };


    return (
        <div className="profile">
          <h1>Edit Profile</h1>
          <div className="profile-form">
            <Form id="update-user" onSubmit={submitForm}>
              <Form.Group>
                <label> User Name *</label>
                <input
                  name="username"
                  placeholder="user Name"
                  value={formData.username}
                  required
                  pattern=".{3,}"
                  onChange={updateForm}
                />
              </Form.Group>
              <Form.Group>
                <label>New Password (Optional)</label>
                <input placeholder="New Password" 
                  name="password"
                  value={formData.password}
                  type="password" 
                  pattern= ".{3,}"
                  onChange={updateForm}
                />
              </Form.Group>
              <Form.Group>
                <label> Email (Optional)</label>
                <input placeholder="New Email" 
                  name="Email"
                  value={formData.Email}
                  type="email" 
                  pattern= ".{3,}"
                  onChange={updateForm}
                />
              </Form.Group>
              <Button type="submit">Update Profile</Button>
            </Form>
          </div>
        </div>
      );
    }
// change
    
    export default editProfile;