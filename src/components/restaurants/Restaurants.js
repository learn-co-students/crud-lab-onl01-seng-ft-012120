import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((restaurant, idx) => {
          return <Restaurant key={idx} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;