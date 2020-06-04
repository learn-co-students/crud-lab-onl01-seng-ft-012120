
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            let restaurant = {
                text: action.text,
                id: cuid()
            }
            return{
                ...state, restaurants: state.restaurants.concat(restaurant)
            }
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants}
          
        case 'ADD_REVIEW':
            console.log(action)
            let review = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }
            return{
                ...state, reviews: state.reviews.concat(review) 
            }
        case 'DELETE_REVIEW':
            return {
            ...state ,reviews: state.reviews.filter(review => review.id !== action.id) 
        }
        default:
            return state
    }
}

