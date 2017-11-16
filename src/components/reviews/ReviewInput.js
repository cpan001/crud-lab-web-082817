import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      restaurantId: this.props.restaurantId,
      review: this.state
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Review:{" "}
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" value="Create Review" />
        </form>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
}

export default ReviewInput;
