import React, { useState, useEffect }from "react";
import { titleFind } from "../fetchRequests";



const SearchBox = () => {
//   function addTitleFind() {
//     titleFind()
//       .then((data) => movieSynopses(data.results[0].id))
//       .then((data) => console.log(data));
//   }
useEffect(() => {
    titleFind ().then((res) =>console.log(res))
    return () => {
        
    }
}, [])
  const [search, setsearch] = useState("");
  return (
    <>
      <div class="input-group ">
        <input
          type="search"
          class="form-control"
          placeholder="Search Movies"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        {/* {titleFind
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (value.toLowerCase().include(search.toLowerCase())) {
            }
          })
          .map((value, key) => {
            return (
              <div className="movies" key={key}>
                <p>{value.titleFind}</p>
              </div>
            );
          })} */}

        <div class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </>
  );
};
 
export default SearchBox; 