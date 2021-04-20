import React, { useState, useEffect } from "react";
import { Input } from "react-bootstrap";
import useStore from "../store";

import {Form} from "react-bootstrap";
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const [search, setsearch] = useState({});

const [userInput, setuserInput] = useState("")
const movieSearch = useStore((state) => {
    return state.movieSearch
    
})

const movieDetails = useStore((state) => {
    return state.movieDetails
    
})
  useEffect(() => {
    movieSearch(userInput).then((data) => setsearch(data));
  }, [userInput]);
  
  
  useEffect(() => {
    movieDetails().then((res) => console.log(res));

  }, [movieDetails]);


  return (
    <>
        <Form.Group controlId="formBasicSearch">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="Search"
          placeholder="Search" 
        //   value {movieDetails}
          value= {userInput}
          onChange= {(e) => setuserInput(e.target.value)}
        />
        </Form.Group>
        <div className="results">
          {search.results && (
            <div>
              {search.results.map((movie) => {
                return <Link to={`/movies/${movie.id}`}> <p>{movie.title}</p> </Link>

              })}
            </div>
          )}
        </div>

    </>
  );
};

export default SearchBox;
