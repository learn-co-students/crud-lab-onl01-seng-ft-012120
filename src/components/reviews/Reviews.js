import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
 
  
  render() {
   
    return (
      <ul>
        {this.props.filteredReviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;