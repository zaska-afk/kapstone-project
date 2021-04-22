import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useStore from "../store";

function Messages(props) {
  const user = useStore((state) => state.user);
  const deleteChat = useStore((state) => state.deleteChat);
  const msgRequest = useStore((state) => state.msgRequest);
  const messages = useStore((state) => state.messages);
  const history = useHistory();

  // useEffect(
  //   (e) => {
  //     msgRequest();
  //   },
  //   [msgRequest]
  // );
  useEffect(
    (e) => {
      console.log(history.location);
      const location = history.location.pathname;
      msgRequest(location);
    },
    [msgRequest, messages, history.location]
  );
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteChat(props.id, user.token).then(() => {
      props.message([]);
    });

    return (
      <div>
        {messages &&
          messages.map((message) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{message.Comments.username}</Card.Title>
                    <Card.Text>{message.Comments.text}</Card.Text>
                    {/* <Button onClick={handleDelete} size="lg" variant="warning"> */}
                    {/* Delete Message
                    </Button> */}
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </div>
    );
  };
}
export default Messages;
