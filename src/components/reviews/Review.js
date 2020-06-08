import React, { Component } from 'react';

class Review extends Component {

  handleClick = (event) => {
    console.log("trying to delete", event.target.id)
    console.log(this.props)
    this.props.deleteReview(event.target.id)
  }

  render() {
    

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick} id={this.props.review.id}> X </button>
      </div>
    );
  }

};

export default Review;