import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useStore from "../store";
import { useHistory } from "react-router-dom";

function NewMessage(props) {
  const newMessageRequest = useStore((state) => state.newMessageRequest);
  const msgRequest = useStore((state) => state.msgRequest);
  const user = useStore((state) => state.user.user);
  const [formData, setFormData] = useState();
  const history = useHistory();

  const handleMessage = async (e) => {
    e.preventDefault();
    const location = history.location.pathname.slice(1);
    await newMessageRequest(user.username, location, user._id, formData);
    const messageData = await msgRequest(location);

    setFormData("");
  };
  return (
    <>
      <Form id="login-form" onSubmit={handleMessage}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="button" htmlFor="displayName">
            <b>Username:</b> {user.username}
          </Form.Label>
          <br />
          <Form.Label className="button" htmlFor="displayName">
            <b>Post Message:</b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="message"
            value={formData}
            autoFocus
            required
            onChange={(e) => {
              setFormData(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit" size="lg" variant="warning">
          Submit New Message
        </Button>
      </Form>
    </>
  );
}
export default NewMessage;
