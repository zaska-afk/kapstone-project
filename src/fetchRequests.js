export const baseURL = "https://socialapp-api.herokuapp.com/";
export const movieURL = "https://imdb8.p.rapidapi.com/";

// User APIs
export const getUserRequest = (username) => {
  return fetch(baseURL + "users/" + username).then((res) => res.json());
};

export const resetUser = (token, username, newUserInfo) => {
  console.log({ token, username, newUserInfo });
  return fetch(baseURL + "users/" + username, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
};

export const deleteUser = (token, username) => {
  return fetch(baseURL + "users/" + username, {
    headers: { Authorization: "Bearer " + token },
    method: "DELETE",
  });
};

// Picture APIs
export const getUserPicture = (username) => {
  return baseURL + `users/${username}/picture`;
};

export const putUserPicture = (token, username, picture) => {
  return fetch(baseURL + `users/${username}/picture`, {
    method: "PUT",
    headers: { Authorization: "Bearer " + token },
    body: picture,
  }).then((res) => res.json());
};

// Chat APIs
export const chatRequest = () => {
  return fetch(baseURL + "messages", {}).then((res) => res.json());
};

export const newChatRequest = (token, text) => {
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  }).then((res) => res.json());
};

export const deleteChat = (token, username) => {
  return fetch(baseURL + "users/" + username, {
    headers: { Authorization: "Bearer " + token },
    method: "DELETE",
  });
};
