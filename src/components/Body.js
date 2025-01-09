import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_GET_RESTAURANTS } from "../utils/constants";
import Shimmer from "./Shimmer.js";

// IMP while using MAPS : No Keys <<<<<< Indexes as keys <<<<< Unique ids as keys
const Body = () => {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_GET_RESTAURANTS);
    const jsonData = await data.json();
    // Optional Chaining
    setRestList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList
              .filter((res) => res.info.avgRating > 4)
              .sort(
                (a, b) =>
                  parseFloat(b.info.avgRating) - parseFloat(a.info.avgRating)
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
