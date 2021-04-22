import React, { useEffect } from "react";

import { Button, Card } from "react-bootstrap";

import useStore from "../store";

const commentsDb = [
  {
    _id: {
      $oid: "6075dd360440bb074f2b67a6",
    },
    username: "MyManMike",
    text: "chatroom post test",
    __v: 0,
  },
  {
    _id: {
      $oid: "6075e10146350707803d4128",
    },
    username: "MyManMike",
    text: "chatroom post test 2",
    __v: 0,
  },
  {
    _id: {
      $oid: "6075e10a46350707803d4129",
    },
    username: "MyManMike",
    text: "asdf",
    __v: 0,
  },
  {
    _id: {
      $oid: "6075e11146350707803d412a",
    },
    username: "MyManMike",
    text: "yes.",
    __v: 0,
  },
];

const usersDb = [
  {
    _id: {
      $oid: "6076f1fc8aa4900e409f440c",
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Meagan",
    email: "meagan@gmail.com",
    password: "aaaaaa",
    __v: 0,
  },
  {
    _id: {
      $oid: "9076f1fc8aa4900e409f440c",
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Siddiq",
    email: "siddiq@gmail.com",
    password: "aaaaaa",
    __v: 0,
  },
  {
    _id: {
      $oid: "8076f1fc8aa4900e409f440c",
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Keisha",
    email: "keisha@gmail.com",
    password: "aaaaaa",
    __v: 0,
  },
  {
    _id: {
      $oid: "7076f1fc8aa4900e409f440c",
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Zach",
    email: "zach@gmail.com",
    password: "aaaaaa",
    __v: 0,
  },
  {
    _id: {
      $oid: "6076f1fc8aa4900e409f440c",
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Anna",
    email: "anna@gmail.com",
    password: "aaaaaa",
    __v: 0,
  },
];

function Messages(props) {
  const user = useStore((state) => state.user);

  const deleteChat = useStore((state) => state.deleteChat);
  const getUserRequest = useStore((state) => state.getUserRequest);
  const msgRequest = useStore((state) => state.msgRequest);
  const messages = useStore((state) => state.messages);

  useEffect(
    (e) => {
      msgRequest();
    },
    [msgRequest]
  );

  // const handleDelete = async (e) => {
  //   e.preventDefault()
  //   await deleteChat(props.id, user.token)
  //     .then(() => {
  //       props.message([]);
  //     })
  // }
  return (
    <div>
      {messages &&
        messages.map((message) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{message.username}</Card.Title>
                  <Card.Text>{message.text}</Card.Text>

                  {/* <Button onClick={handleDelete} size="lg" variant="info">Delete Message</Button> */}
                </Card.Body>
              </Card>
            </>
          );
        })}
    </div>
  );
}
export default Messages;
