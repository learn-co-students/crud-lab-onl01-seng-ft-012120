import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
       {this.props.reviews.map((review, idx) => {
         if (review.restaurantId === this.props.restaurant.id) {
          return <Review key={idx} review={review} deleteReview={this.props.deleteReview}/>
         }
        })}
      </ul>
    );
  }
};

export default Reviews;