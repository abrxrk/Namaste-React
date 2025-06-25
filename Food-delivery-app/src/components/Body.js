import ResCard from "./ResCard";
import resList from "../utils/MockData";
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
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-card">
        {resList.map((restaurants) => (
          <ResCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
