import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
 
  render() {
    const restReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    // console.log(this.props.reviews[0].restaurantId === this.props.restaurantId)
    return (
      <ul>
          {restReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;