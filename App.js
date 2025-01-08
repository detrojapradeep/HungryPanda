import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - About
 *  - NavItems
 * Body
 *  - Search bar
 *  - Restaurant Container
 *      - Restaurant Card
 *      - Image, Restaurant Name, Star rating, cuisine
 * Footer
 *  - Trademark
 *  - Links
 *  - Contact us
 *  - Address
 */

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://img.alicdn.com/imgextra/i3/O1CN01TUSvP31jwnjklOZl1_!!6000000004613-2-tps-2400-1200.png_.webp"
            width={200}
            alt="Hungry Panda Logo"
          ></img>
        </div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <div className="shopping-cart-logo">
              <img
                src="data:image/png;base64,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"
                alt="Shopping Cart Logo"
              ></img>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const restObj = [
  {
    info: {
      id: "681612",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.6,
      parentId: "11216",
      avgRatingString: "4.6",
      totalRatingsString: "360",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹300",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "342643",
      name: "The Pizza Bakery - Wood Fired Sourdough",
      cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
      locality: "Church Street",
      areaName: "Central Bangalore",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Continental"],
      avgRating: 4.6,
      parentId: "522292",
      avgRatingString: "4.6",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "2.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-church-street-central-bangalore-rest342643",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69876",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
      locality: "UB City",
      areaName: "Vittal Mallya Road",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "282",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-ub-city-vittal-mallya-road-rest69876",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12808",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/8131e24f-d8ba-4dcd-a338-6a9b487c1119_12808.jpg",
      locality: "Shanti Nagar",
      areaName: "Shanti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.6,
      parentId: "22",
      avgRatingString: "4.6",
      totalRatingsString: "30K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "12K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "588619",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
      locality: "Brigade Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "344",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "667962",
      name: "Paris Panini - Gourmet Sandwiches & Wraps",
      cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
      locality: "Church Street",
      areaName: "Central Bangalore",
      costForTwo: "₹500 for two",
      cuisines: [
        "Continental",
        "Pastas",
        "Salads",
        "Snacks",
        "Desserts",
        "Fast Food",
        "French",
      ],
      avgRating: 4.6,
      parentId: "21019",
      avgRatingString: "4.6",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "770",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-rest667962",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396746",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/f2d54a43-4e27-45d8-93df-39e251b5aceb_396746.JPG",
      locality: "Residency Road",
      areaName: "Shantinagar",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Bakery", "Ice Cream", "Snacks"],
      avgRating: 4.3,
      parentId: "4444",
      avgRatingString: "4.3",
      totalRatingsString: "258",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-residency-road-shantinagar-rest396746",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "426730",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d9cf35fc-2891-47bc-b5e8-f7d5cef27b18_426730.jpg",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "422",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "810943",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "6d82853686a08a41393caa841f2015ec",
      locality: "CENTRE POINT",
      areaName: "RESIDENCY ROAD",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.8,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.8",
      totalRatingsString: "115",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-centre-point-residency-road-rest810943",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "570511",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/bd99adc6-9b49-4540-b8d7-a7d55cdb142d_570511.jpg",
      locality: "Puhlong X-road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "220772",
      name: "Aubree",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/08bdd927-aa43-46c9-af4f-902ea0dd9c3f_220772.jpg",
      locality: "Craig Park Layout",
      areaName: "Central Bangalore",
      costForTwo: "₹700 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "3807",
      avgRatingString: "4.6",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/aubree-craig-park-layout-central-bangalore-rest220772",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "440123",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "VASANTHA NAGAR",
      areaName: "Cunningham Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.6",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-09 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Vegan.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Vegan.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹64",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-vasantha-nagar-cunningham-road-rest440123",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17118",
      name: "Social",
      cloudinaryImageId: "uvdkvtb6ibzjn1aol15k",
      locality: "Church Street",
      areaName: "Church Street",
      costForTwo: "₹500 for two",
      cuisines: [
        "Chinese",
        "Fast Food",
        "Biryani",
        "Pizzas",
        "Salads",
        "Kebabs",
        "Juices",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "2146",
      avgRatingString: "4.4",
      totalRatingsString: "8.6K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-08 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "15K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-172307cc-b29b-45fe-9831-955dedc3ad7f",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/social-church-street-rest17118",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = ({ restData }) => {
  const { name, cuisines, costForTwo, avgRating } = restData?.info;
  const { deliveryTime } = restData.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="Restaurant logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restData.info.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>ETA : {deliveryTime} minutes</h4>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
