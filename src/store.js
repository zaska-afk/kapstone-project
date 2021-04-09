import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, chats: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETCHATS = "GETCHATS";
export const USERINFO = "USERINFO";
export const DELETEUSER = "DELETEUSER";
export const FINDMOVIE = "FINDMOVIE";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GETCHATS:
      return { messages: action.payload };
    case USERINFO:
      return { userProfile: action.payload };
    case DELETEUSER:
      return { userProfile: {}, user: initialState.user };
    case FINDMOVIE:
      return { title: action.payload };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
