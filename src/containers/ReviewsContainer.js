import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  

  render() {
    return (
      <div>
        <ReviewInput  addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews filteredReviews={this.props.filteredReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
const filteredReviews = (state, restaurantId) => {
  return state.reviews.filter(review => review.restaurantId === restaurantId)
 }

const mapStateToProps = (state, ownProps) => {
  return {
    filteredReviews: filteredReviews(state, ownProps.restaurant.id) 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review: review}),
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)