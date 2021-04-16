import React, {useState, useEffect} from "react";
import useStore from "../store";

const SearchBox = () => {
  const [search, setsearch] = useState({});
const [userInput, setuserInput] = useState("")
const movieSearch = useStore((state) => {
    return state.movieSearch
    
})
  useEffect(() => {
    movieSearch(userInput).then((data) => setsearch(data));
  }, [userInput]);
//   useEffect(() => {
//     movieDetails().then((res) => console.log(res));

//     return () => {};
//   }, [movieDetails]);

  return (
    <>
      <div class="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value= {userInput}
          onChange= {(e)=>setuserInput(e.target.value)}
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
        {search.results && (
            <div>
                {search.results.map((movie) => {
                    return (
                        <p>
                            {movie.title}
                        </p>
                    )

                })}
            </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
