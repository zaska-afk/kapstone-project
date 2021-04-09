export const baseURL = "https://socialapp-api.herokuapp.com/";
export const movieURL = "https://imdb8.p.rapidapi.com/";

// Login/logout APIs
export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const newLoginRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

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

// Movie Database
export const titleFind = (searchTitle) => {
  return fetch(movieURL + `title/find?q=${searchTitle}`, {
    headers: {
      "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
      useQueryString: true,
    },
  }).then((res) => res.json());
};

//"https://imdb8.p.rapidapi.com/title/get-synopses?tconst=tt0944947",
export const movieSynopses = (titleId) => {
  return fetch(
    movieURL + "title/get-synopses?tconst=" + titleId.split("/")[2],
    {
      headers: {
        "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
        useQueryString: true,
      },
    }
  ).then((res) => res.json());
};

export const popularGenres = () => {
  return fetch(movieURL + "title/list-popular-genres", {
    headers: {
      "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
      useQueryString: true,
    },
  }).then((res) => res.json());
};

export const movieRatings = (titleId) => {
  return fetch(movieURL + "title/get-ratings?tconst=" + titleId.split("/")[2], {
    headers: {
      "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
      useQueryString: true,
    },
  }).then((res) => res.json());
};

export const comingSoon = (titleId) => {
  return fetch(
    movieURL +
      "title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US",
    {
      headers: {
        "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
        useQueryString: true,
      },
    }
  ).then((res) => res.json());
};

export const movieImages = (titleId) => {
  return fetch(
    movieURL + `title/get-images?tconst=${titleId.split("/")[2]}&limit=1`,
    {
      headers: {
        "x-rapidapi-key": "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
        useQueryString: true,
      },
    }
  ).then((res) => res.json());
};
