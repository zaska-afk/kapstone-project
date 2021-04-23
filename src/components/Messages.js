import React, { useEffect } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useStore from "../store";

function Messages(props) {
  const user = useStore((state) => state.user);
  const deleteChat = useStore((state) => state.deleteChat);
  const msgRequest = useStore((state) => state.msgRequest);
  const messages = useStore((state) => state.messages);
  const history = useHistory();

  const location = history.location.pathname.slice(1);

  useEffect((e) => {
    console.log(history.location);
    msgRequest(location);
  }, []);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteChat(id, location).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      {messages &&
        messages.map((message) => {
          return (
            <>
              <CardDeck>
                <Card className="message-card">
                  <Card.Body>
                    <Card.Title>{message.username}</Card.Title>
                    <Card.Text>{message.text}</Card.Text>
                    <Button
                      value="Delete"
                      onClick={(e) => handleDelete(e, message._id)}
                      size="sm"
                      variant="warning"
                    >
                      Delete Chat
                    </Button>
                  </Card.Body>
                </Card>
              </CardDeck>
            </>
          );
        })}
    </div>
  );
}

export default Messages;

//to delete messages

//function MessageItem(props) {
  // const [countLikes, setCounter] = useState();
  // const authUser = useStore((state) => state.user);
  // const { id } = props;
  // const user = useStore((state) => state.user);
  // const trashMessage = (token, messageId) => {
  //   deleteMessage(token, messageId).then((data) => {
  //     console.log(data.statusCode);
  //   });
  // };
  // return (
  //   <div className="MessageItem_container">
  //     <p>{props.username}</p>
  //     <p>{props.createdAt}</p>
  //     <p>{props.text}</p>
  //     <p>
  //       <button onClick={(props) => addLike(authUser.token, id)}>Like</button>
  //       {props.likes}
  //       <EmojiHeartEyes />
  //     </p>



  //     {props.username === user.username && (
  //       <button onClick={() => trashMessage(user.token, id)}>

  //         <Trash />
  //       </button>
  //     )}
