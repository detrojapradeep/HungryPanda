import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// IMP while using MAPS : No Keys <<<<<< Indexes as keys <<<<< Unique ids as keys

const Body = () => {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setRestList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
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
