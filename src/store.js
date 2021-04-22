import create from "zustand";
import { devtools } from "zustand/middleware";

const movieURL = "https://api.themoviedb.org/";
const baseURL = "http://localhost:3000/";
// const baseURL = "https://socialapp-api.herokuapp.com/";
const apiKey = "api_key=6645eb422ef966984e8f1eade6202ea0";
const ourURL = "http://localhost:3000/";

const fetchPage = async (pageNumber) => {
  const res = await fetch(
    movieURL + `3/movie/upcoming?${apiKey}&language=en-US&page=${pageNumber}`
  );
  const data = res.json();
  return data;
};

const fetchMovieDetails = async (movie_id) => {
  const res = await fetch(
    movieURL + `3/movie/${movie_id}?${apiKey}&language=en-US`
  );
  const data = res.json();
  return data;
};

export const updateUser = (username, password, Email, token) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...{ displayName, Email },
      ...(password ? { password } : {})
    }),
  }).then((res) => res.json())
);

// define the store's initial state
const useStore = create(
  devtools((set) => ({
    //Our DB URL
    // Login/logout APIs
    loginRequest: (username, password) =>
      fetch(`${baseURL}users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          set({ user: user });
          return user;
        }),
    logoutRequest: (token) =>
      fetch(`${ourURL}auth/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json()),

    createUser: (username, email, password) =>
      fetch(`${baseURL}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
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

    getAllUsers: () => {
      return fetch(baseURL + "users").then((res) => res.json());
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

    // Movie URL
    fetchUpcomingMovies: async () => {
      const fetchPages = [];
      for (let i = 1; i <= 5; i++) {
        fetchPages.push(fetchPage(i));
      }
      const pages = await Promise.all(fetchPages);
      set({ upcomingMovies: pages.flatMap((page) => page.results) });
    },
    upcomingMovies: [],

    fetchPopularMovies: async () => {
      const fetchPages = [];
      for (let i = 1; i <= 5; i++) {
        fetchPages.push(fetchPage(i));
      }
      const pages = await Promise.all(fetchPages);
      set({ popularMovies: pages.flatMap((page) => page.results) });
    },
    popularMovies: [],

    fetchActionMovies: async () => {
      const movieIds = [390054, 385687, 522931, 664767, 9257];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ actionMovies: results });
    },
    actionMovies: [],

    fetchAnimationMovies: async () => {
      const movieIds = [12, 127380, 9502, 136799, 52774];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ animationMovies: results });
    },
    animationMovies: [],

    fetchComedyMovies: async () => {
      const movieIds = [49524, 483980, 497796, 484718, 615678];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ comedyMovies: results });
    },
    comedyMovies: [],

    fetchDocumentaryMovies: async () => {
      const movieIds = [638164, 250653, 497796, 484718, 684700];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ documentaryMovies: results });
    },
    documentaryMovies: [],

    fetchHorrorMovies: async () => {
      const movieIds = [14977, 449454, 346364, 405882, 36671];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ horrorMovies: results });
    },
    horrorMovies: [],

    fetchSciFiMovies: async () => {
      const movieIds = [31127, 694938, 333339, 791373, 329865];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ sciFiMovies: results });
    },
    sciFiMovies: [],

    fetchThirllerMovies: async () => {
      const movieIds = [43253, 19380, 23202, 522681, 625568];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ thrillerMovies: results });
    },
    thrillerMovies: [],

    fetchKidsMovies: async () => {
      const movieIds = [118979, 448119, 777350, 420817, 644092];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ kidsMovies: results });
    },
    kidsMovies: [],

    fetchNewMovies: async () => {
      const movieIds = [390054, 385687, 522931, 664767, 9257];
      const moviesFetch = movieIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(moviesFetch);
      set({ newMovies: results });
    },
    newMovies: [],

    /////////////////////////////////////////////////////////////////////////
    fetchMovieDetails: (movie_id) => {
      return fetch(movieURL + `3/movie/${movie_id}?${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((data) => set({ detailsArray: data }));
    },
    detailsArray: { results: [] },

    movieSearch: (query) => {
      return fetch(
        movieURL +
          `3/search/movie?${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json());
      // .then((data) => set({ searchArray: data }));
    },
    searchArray: { results: [] },

    movieDetails: (movie_id) => {
      return fetch(
        movieURL + `3/movie/${movie_id}?${apiKey}&language=en-US`
      ).then((res) => res.json());
      // .then((data) => set({ detailsArray: data }));
    },
    detailsArray: { results: [] },

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
// trying
