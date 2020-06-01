import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {   deleteReview } = this.props;
    console.log(`props in reviews is ${JSON.stringify(this.props)}`);
    // console.log(`review in reviews is ${JSON.stringify({reviews})}`);
    // console.log(`restid in reviews is ${JSON.stringify({restaurantId})}`);
    console.log(`delreview in reviews is ${JSON.stringify({deleteReview})}`);
    // const restReviews = this.props.filter(review => review.restaurantId === restaurantId)
    // const reviewsR = restReviews.map(review => {
    //   return <Review deleteReview={this.props.deleteReview} {...review} key={review.id} />
    // })
    let restaurantId = this.props.restaurantId;
    let reviews = this.props.reviews;
    console.log(`review in reviews is ${JSON.stringify(reviews)}`);
    const associatedReviews =() => {if (reviews){
      return (reviews.filter(review =>  review.restaurantId === restaurantId));
    } else return []}
    let assRev = associatedReviews();
    const reviewList = assRev.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {/* Reviews */}
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;