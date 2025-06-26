import ResCard from "./ResCard";
import resList from "../utils/MockData";
import { useState } from "react";
import MockData from "../utils/MockData";

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
    const  [resListR, setResListR] = useState(resList);
  return (
    <div className="body">
      <div className="search">
              <button       onClick={() => {
        const filterData = resListR.filter((res) => res.data.avgRating > 4);
        setResListR(filterData);
      }}>High rated res</button>
      </div>


      <div className="res-card">
        {resListR.map((restaurants) => (
          <ResCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;



  
