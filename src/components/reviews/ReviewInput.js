import React, { Component } from 'react';


class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // console.log(`props is ${JSON.stringify(this.props)}`)
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    })
  }
// restaurantId: this.props.restaurant.id
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
          <input type="text" name="text" value={this.state.text} onChange={event => {this.handleOnChange(event)}} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
