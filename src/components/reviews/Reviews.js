import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const resReviews = this.props.store
      .getState()
      .reviews.filter(
        review => review.restaurantId === this.props.restaurantId
      );
    return (
      <ul>
        {resReviews.map(rev => (
          <Review key={rev.id} store={this.props.store} review={rev} />
        ))}
      </ul>
    );
  }
}

export default Reviews;
