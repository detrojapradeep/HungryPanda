import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_GET_RESTAURANTS } from "../utils/constants";
import Shimmer from "./Shimmer.js";

// IMP while using MAPS : No Keys <<<<<< Indexes as keys <<<<< Unique ids as keys
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

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
    setFilteredRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering!
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // Filter the res cards
              // Rerender the Body component
              const searchResList = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRes(searchResList);
            }}
          >
            Search
          </button>
        </div>
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
              setFilteredRes(filteredList);
            }}
          >
            Filter Top Rated Restaurants
          </button>
          <button
            className="clear-filters"
            onClick={() => {
              setFilteredRes(restList);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
