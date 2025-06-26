import ResCard from "./ResCard";
import resList from "../utils/MockData";
import { useState } from "react";


const Search = () => {
  return (
    <div className="search">
      <div className="search bar">
        <input></input>
        <button>Search</button>
      </div>
    </div>
  );
};


const Body = () => {
    const  [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="search">
              <button       onClick={() => {
        const filterData = listOfRestaurants.filter((res) => res.data.avgRating > 4);
        setListOfRestaurants(filterData);
      }}>High rated res</button>
      </div>


      <div className="res-card">
        {listOfRestaurants.map((restaurants) => (
          <ResCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;



  
