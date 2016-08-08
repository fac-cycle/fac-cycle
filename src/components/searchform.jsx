/* eslint-disable react/jsx-no-bind */
import React from 'react';


class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default SearchForm;
