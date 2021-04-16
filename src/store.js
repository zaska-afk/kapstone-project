import create from "zustand";
import { devtools } from "zustand/middleware";

const movieURL = "https://api.themoviedb.org/";
const baseURL = "https://socialapp-api.herokuapp.com/";
const apiKey = "api_key=6645eb422ef966984e8f1eade6202ea0";

// define the store's initial state
const useStore = create(
  devtools((set) => ({
    //Our DB URL
    // Login/logout APIs
    loginRequest: (username, password) =>
      fetch(`${baseURL}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((res) => res.json()).then((user) => {
        set({ user: user })
        return user

      }),
    logoutRequest: (token) =>
      fetch(`${baseURL}auth/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json()),
    createUser: (username, displayName, password) =>
      fetch(`${baseURL}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          displayName,
          password,
        }),
      }).then((res) => res.json()),
    user: {},

    //messages/comments

    getUserRequest: (username) => {
      return fetch(baseURL + "users/" + username).then((res) => res.json());
    },
    msgRequest: () => {
      return fetch(baseURL + "messages", {}).then((res) => res.json());
    },
    singleMessage: () => {
      return fetch(baseURL + "messages/1", {}).then((res) => res.json());
    },
    newMessageRequest: (token, text) => {
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
    },
    deleteMessage: (token, username) =>
      fetch(baseURL + "users/" + username, {
        headers: { Authorization: "Bearer " + token },
        method: "DELETE",
      }),
    deleteChat: (token, messageId) => {
      return fetch(baseURL + "messages/" + messageId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },

    // export const getAllUserMessagesList = (username) => {
    //   return fetch(
    //     baseURL + "messages?limit=100&username=" + username,
    //     {}
    //   ).then((res) => res.json());
    // };

    // export const getUserMessage = () => {
    //   return fetch(baseURL + "messages/" + 105, {
    //     method: "GET",
    //   }).then((res) => res.json());
    // };

    // export const deleteMessage = (token, messageId) => {
    //   return fetch(baseURL + "messages/" + messageId, {
    //     method: "DELETE",
    //     headers: {
    //       Authorization: "Bearer " + token,
    //       "Content-Type": "application/json",
    //     },
    //   }).then((res) => res.json());
    // };
    //Movie URLs

    fetchUpcomingMovies: async () => {
      const fetchPage = async (pageNumber) => {
        const res = await fetch(
          movieURL +
            `3/movie/upcoming?${apiKey}&language=en-US&page=${pageNumber}`
        );
        const data = res.json();
        return data;
      };
      const fetchPages = [];
      for (let i = 1; i <= 5; i++) {
        fetchPages.push(fetchPage(i));
      }
      const pages = await Promise.all(fetchPages);
      set({ upcomingMovies: pages.flatMap((page) => page.results) });
    },
    upcomingMovies: [],

    fetchPopularMovies: async () => {
      const fetchPage = async (pageNumber) => {
        const res = await fetch(
          movieURL +
            `3/movie/popular?${apiKey}&language=en-US&page=${pageNumber}`
        );
        const data = res.json();
        return data;
      };
      const fetchPages = [];
      for (let i = 1; i <= 5; i++) {
        fetchPages.push(fetchPage(i));
      }
      const pages = await Promise.all(fetchPages);
      set({ popularMovies: pages.flatMap((page) => page.results) });
    },
    popularMovies: [],

    ///////////////////////////////////////////////////////////////////
    fetchActionMovies: async () => {
      const fetchPage = async (movie_id) => {
        const res = await fetch(
          movieURL + `3/movie/${movie_id}?${apiKey}&language=en-US`
        );
        const data = res.json();
        return data;
      };
      const movieId = [390054, 548897, 522931, 664767, 9257];
      // const fetchId = [];
      // for (let i = 0; i <= 5; i++) {
      //   fetchId.push(fetchPage(i));
      // }
      const pages = await Promise.all(movieId);
      console.log("hi", pages);
      set({ actionMovies: pages.flatMap((page) => page.results) });
      console.log(
        "here",
        pages.flatMap((page) => page.results)
      );
    },
    actionMovies: [],

    /////////////////////////////////////////////////////////////////////////

    movieSearch: (query) => {
      return fetch(
        movieURL +
        `3/search/movie?${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => set({ searchArray: data }));
    },
    searchArray: { results: [] },

    movieDetails: (movie_id) => {
      return fetch(movieURL + `3/movie/${movie_id}?${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((data) => set({ detailsArray: data }));
    },
    setPopularMovies: () => {
      return fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6645eb422ef966984e8f1eade6202ea0&language=en-US&page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          set({ popularMovies: data });
          return data;
        });
    },
    popularMovies: {},
  }))
);


export default useStore;
