import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { id: cuid(), ...action.restaurant }
        ]
      };
    case "DELETE_RESTAURANT":
      const newRestaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.id
      );
      const newRevs = state.reviews.filter(
        rev => rev.restaurantId !== action.id
      );
      return { reviews: newRevs, restaurants: newRestaurants };

    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [
          ...state.reviews,
          { ...action.review, restaurantId: action.restaurantId, id: cuid() }
        ]
      };
    case "DELETE_REVIEW":
      const newReviews = state.reviews.filter(
        review => review.id !== action.id
      );
      return { ...state, reviews: newReviews };
    default:
      return state;
  }
}
