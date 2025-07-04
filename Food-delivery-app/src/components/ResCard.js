import constant, { IMG_URL } from "../utils/constant";
const ResCard = ({ resData }) => {
  return (
    <div className="kfc">
      <img className="kfc-logo" alt="res-img" src={IMG_URL}></img>
      <h3>{resData.data.name}</h3>
      <p>{resData.data.deliveryTime} minutes</p>
      <p>{resData.data.cuisines.join(", ")}</p>
      <p>{resData.data.avgRating} avgRating</p>
    </div>
  );
};

export default ResCard;
