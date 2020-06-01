import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    // console.log(`props is  ${JSON.stringify(this.props.reviews.reviews)}`);
    console.log(`props is  ${JSON.stringify(this.props)} restaurant is ${JSON.stringify(this.props.restaurant)}`);
    // console.log(`props is  ${(this.props)}`);
    return (
      <div>
        <ReviewInput 
        restaurantId={this.props.restaurant.id} 
        addReview={this.props.addReview} 
        />
        <Reviews 
        // restaurantId={this.props.reviews.restaurants[0].id} 
        restaurantId={this.props.restaurant.id} 
        reviews={this.props.reviews} 
        deleteReview={this.props.deleteReview} 
        />
      </div>
    )
  }
}
// restaurantId={this.props.restaurant.id}
const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)


