import React from 'react';
import Button from '@material-ui/core/Button';


const messagesDb = [
  {
    "id": "1",
    "username": "Spidey008",
    "messageText": "hey anyone watch the new Spiderman yet?",
    "date": "4/8/21"
  },
  {
    "id": "2",
    "username": "Bella",
    "messageText": "I hate when people talk during a movie",
    "date": "4/8/21"
  },
  {
    "id": "3",
    "username": "ThirdUser",
    "messageText": "whats going going?",
    "date": "4/8/21"
  }
]

function Messages() {
  return (
    <div>
      {/* <Image
        src={bgMessage}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }} /> */}

      {
        messagesDb.map((message) => {
          return (<><Button variant="contained" color="primary">
            {message.messageText}</Button>
            {message.date}
            <br />
            {message.username}</>)




        })
      }</div>
    // < Button variant="contained" color="primary" >
    //     Hello this is an awesome Message
    // </Button >
  )
}

export default Messages;
