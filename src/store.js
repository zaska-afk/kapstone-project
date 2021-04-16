import create from "zustand";
import { devtools } from "zustand/middleware";

const movieURL = "https://imdb8.p.rapidapi.com/";
const baseURL = "https://socialapp-api.herokuapp.com/";

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
      }).then((res) => res.json()),
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

    //Movie URL
    titleFind: (searchTitle) => {
      return fetch(movieURL + `title/find?q=${searchTitle}`, {
        headers: {
          "x-rapidapi-key":
            "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
          useQueryString: true,
        },
      }).then((res) => res.json());
    },
    titleBase: (searchId) => {
      return fetch(movieURL + `title/get-base?tconst=${searchId}`, {
        headers: {
          "x-rapidapi-key":
            "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
          useQueryString: true,
        },
      }).then((res) => res.json());
    },
    base: {},
    movieSynopses: (titleId) => {
      return fetch(
        movieURL + "title/get-synopses?tconst=" + titleId.split("/")[2],
        {
          headers: {
            "x-rapidapi-key":
              "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
            useQueryString: true,
          },
        }
      ).then((res) => res.json());
    },
    popularGenres: () => {
      return fetch(movieURL + "title/list-popular-genres", {
        headers: {
          "x-rapidapi-key":
            "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
          useQueryString: true,
        },
      }).then((res) => res.json());
    },
    movieRatings: (titleId) => {
      return fetch(
        movieURL + "title/get-ratings?tconst=" + titleId.split("/")[2],
        {
          headers: {
            "x-rapidapi-key":
              "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
            useQueryString: true,
          },
        }
      ).then((res) => res.json());
    },
    comingSoon: (titleId) => {
      return fetch(
        movieURL +
          "title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US",
        {
          headers: {
            "x-rapidapi-key":
              "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
            useQueryString: true,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => set({ comingSoonArray: data }));
    },
    comingSoonArray: {},
    movieImages: (titleId) => {
      return fetch(
        movieURL + `title/get-images?tconst=${titleId.split("/")[2]}&limit=1`,
        {
          headers: {
            "x-rapidapi-key":
              "194a9c5509mshb0aa3ac6c940779p18e80ajsn2d080182ae5f",
            useQueryString: true,
          },
        }
      ).then((res) => res.json());
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
