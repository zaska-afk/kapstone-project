import React from "react";
import { Button } from "react-bootstrap";
const messagesDb = [
  {
    _id: {
      $oid: "6076f1fc8aa4900e409f440c"
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Meagan",
    email: "meagan@gmail.com",
    password: "aaaaaa",
    __v: 0
  },
  {
    _id: {
      $oid: "9076f1fc8aa4900e409f440c"
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Siddiq",
    email: "siddiq@gmail.com",
    password: "aaaaaa",
    __v: 0
  },
  {
    _id: {
      $oid: "8076f1fc8aa4900e409f440c"
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Keisha",
    email: "keisha@gmail.com",
    password: "aaaaaa",
    __v: 0
  },
  {
    _id: {
      $oid: "7076f1fc8aa4900e409f440c"
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Zach",
    email: "zach@gmail.com",
    password: "aaaaaa",
    __v: 0
  },
  {
    _id: {
      $oid: "6076f1fc8aa4900e409f440c"
    },
    likedMovies: [],
    movieBuddies: [],
    username: "Anna",
    email: "anna@gmail.com",
    password: "aaaaaa",
    __v: 0
  }
]


function Messages() {
  const deleteChat = useStore((state) => state.deleteChat);
  const getUserRequest = useStore((state) => state.getUserRequest);  
  const msgRequest = useStore((state) => state.msgRequest);  
  
  // const handleDelete = () => {
  //   deleteChat(getUserRequest.token,id).then(() => {
  //     // props.getAllOfMessages();
  //   })
  // }
  return (
    <div>
      {msgRequest.map((message) => {
        return (
          <>
            <Card style={{ width: '18rem' }}>

              <Card.Body>
                <Card.Title>{message.username}</Card.Title>
                <Card.Text>
                  {message.messages}
                </Card.Text>

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