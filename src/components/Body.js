import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockData";
import { useState } from "react";
// IMP while using MAPS : No Keys <<<<<< Indexes as keys <<<<< Unique ids as keys

const Body = () => {
  const [restList, setRestList] = useState(restObj);

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestList(filteredList);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
