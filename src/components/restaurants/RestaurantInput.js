import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: this.state
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Restaurant:{" "}
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" value="Create Restaurant" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
