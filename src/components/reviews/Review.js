import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li key={this.props.review.id}>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
