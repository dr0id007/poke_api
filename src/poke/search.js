import React, { Component } from "react";
import Text from "semantic-ui-react/dist/commonjs/elements/Input";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Fetch from "./fetch";

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };

    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlesubmit(e) {
    e.preventDefault();
    console.log("search term:-", this.state.name);
    const store = this.props.store;
    store.dispatch({
      type: "SEARCH",
      name: this.state.name
    });
  }

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.handlesubmit}>
          <Text
            className="ui input"
            name="name"
            placeholder="pokemon"
            icon="search"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button variant="contained" type="submit" className="ui basic button">
            Search
          </Button>
        </form>
      </div>
    );
  }
}
