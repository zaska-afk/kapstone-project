import React from "react";
import Button from "@material-ui/core/Button";
const messagesDb = [
  {
    id: "1",
    username: "Spidey008",
    messageText: "hey anyone watch the new Spiderman yet?",
    date: "4/8/21",
  },
  {
    id: "2",
    username: "Bella",
    messageText: "I hate when people talk during a movie",
    date: "4/8/21",
  },
  {
    id: "3",
    username: "ThirdUser",
    messageText: "whats going going?",
    date: "4/8/21",
  },
];
function Messages() {
  return (
    <div>
      {messagesDb.map((message) => {
        return (
          <>
            <Button variant="contained" color="primary">
              {message.messageText}
            </Button>
            {message.date}
            <br />
            {message.username}
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
