import { REST_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restData }) => {
  const { name, cuisines, costForTwo, avgRating } = restData?.info;
  const { deliveryTime } = restData.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="Restaurant logo"
        src={REST_CDN_URL + restData.info.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>ETA : {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
