import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = () => {this.props.deleteReview(this.props.review.id)}
  render() {
    const { review } = this.props
    console.log(review);
    return (
      <div>
        <li>
          {/* {review.text} */}
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
