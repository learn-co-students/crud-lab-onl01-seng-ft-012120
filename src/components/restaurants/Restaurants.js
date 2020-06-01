import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  

  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      return <Restaurant deleteRestaurant={this.props.deleteRestaurant} {...restaurant} restaurant={restaurant} key={restaurant.id} />
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;