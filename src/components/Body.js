import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockData";

// IMP while using MAPS : No Keys <<<<<< Indexes as keys <<<<< Unique ids as keys

const Body = () => {
  return (
    <div className="Body">
      <div className="search-bar">
        <h3>This is a Search Bar</h3>
      </div>
      <div className="restaurant-container">
        {restObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
