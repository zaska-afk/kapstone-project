import React, { useEffect, useState } from "react";
import { Button, CardDeck, Form, Image, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import NavBar from "../components/NavBar";
import PopcornContainers from "../assets/PopcornContainers.jpg";
import useStore from "../store";

function EditProfile() {
  const user = useStore((state) => state.user.user);
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: user.username || "",
    email: user.email || "",
  });
  const updateUser = useStore((state) => state.updateUser);
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
    updateUser(user._id, formData.username, formData.email).then((res) => {
      history.push(`/profile/${user._id}`);
    });
  };

  return (
    <>
      <NavBar />
      <Image
        src={PopcornContainers}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <h1 className="home-header">Profile Page</h1>

      <CardDeck className="card-deck">
        <Card className="profile-card2">
          <Card.Body>
            <Card.Title>
              <h1>
                <b>Edit Profile</b>
              </h1>
            </Card.Title>
            <hr />
            <br />
            <Form id="update-user" onSubmit={submitForm}>
              <Form.Group>
                <label>
                  <b>User Name</b>
                </label>
                <input
                  name="username"
                  placeholder="user Name"
                  value={formData.username}
                  required
                  onChange={updateForm}
                />
              </Form.Group>
              <Form.Group>
                <label>
                  <b>Email (Optional)</b>
                </label>
                <input
                  placeholder="New Email"
                  name="email"
                  value={formData.email}
                  type="email"
                  onChange={updateForm}
                />
              </Form.Group>
              <br />
              <Button type="submit" variant="light">
                Update Profile
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}
export default EditProfile;
