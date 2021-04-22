import React, { useEffect, useState } from 'react';
import { updateUser,  useStore } from '../store';
import { InputGroup, Button, Form}  from 'react-bootstrap';

function Profile() {
    const user = useStore((state) => state.user);
    const [formData, setFormData] = useState({
      userName: '',
      password: '',
      Email: '',
    });



    const syncFormToApi = () => {
        if (user.username)
        getUserRequest(user.username).then((userData) => {
              setFormData((prev) => ({
                ...prev,
                username: userData.user.userName,
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
    updateUser(user.username, formData.password, formData.displayName, formData.about, user.token)
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
                <Input
                  name="displayName"
                  placeholder="Display Name"
                  value={formData.displayName}
                  required
                  pattern=".{3,}"
                  onChange={updateForm}
                />
              </Form.Group>
              <Form.Group>
                <label>New Password (Optional)</label>
                <InputGroup placeholder="New Password" 
                  name="password"
                  value={formData.password}
                  type="password" 
                  pattern= ".{3,}"
                  onChange={updateForm}
                />
              </Form.Group>
              <Form.Group>
                <label> Email (Optional)</label>
                <InputGroup placeholder="New Email" 
                  name="email"
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
    
    export default Profile;