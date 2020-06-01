import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {this.props.deleteRestaurant(this.props.id)}

  render() {
    const { restaurant } = this.props;
    console.log(`props in rest is  ${JSON.stringify(this.props)}`);
    console.log({restaurant});

    return (
      <div>
        <li>
          {this.props.text} <button onClick={this.handleOnClick} > X </button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
