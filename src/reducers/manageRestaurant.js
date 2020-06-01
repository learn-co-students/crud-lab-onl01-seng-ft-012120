
import cuid from 'cuid';
export const cuidFn = cuid;
// import uuid from 'uuid'

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
    }, action) {
        console.log(action);
    switch (action.type){
        case "ADD_RESTAURANT": 
        let restaurant = {
            id: cuid(), 
            text: action.text
        }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case 'ADD_REVIEW':
            let review = { 
                text: action.review.text, 
                restaurantId: action.review.restaurantId, 
                id: cuid() };
                console.log(`state in add review is ${JSON.stringify(state)} review is ${JSON.stringify(action.review)}`);
            return { ...state,
                reviews: [...state.reviews, review]
            }
        
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews } 
        default: 
            return state;
    }
}
