import React, { useEffect } from "react";
import { comingSoon } from "../fetchRequests";
import { FINDMOVIE, useStore } from "../store";

function UpcomingMovie(props) {
  //   function testTitleFind() {
  //     titleFind()
  //       .then((data) => comingSoon(data.results[0].id))
  //       .then((data) => console.log(data));
  //   }

  function loadComingSoon() {
    comingSoon()
      .then((data) => comingSoon(data.results.id))
      .then((data) => console.log(data));
  }

  const dispatch = useStore((state) => state.dispatch);
  const messages = useStore((state) => state.messages);
  const [text, setText] = React.useState("");
  useEffect(
    (e) => {
      comingSoon().then((title) =>
        dispatch({ type: FINDMOVIE, payload: title })
      );
    },
    [dispatch]
  );
  function handleSubmit(event) {
    setText(event.target.value);
    console.log(setText);
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {messages}
      </div>
      <form onSubmit={handleSubmit}></form>
    </React.Fragment>
  );
}
export default UpcomingMovie;
