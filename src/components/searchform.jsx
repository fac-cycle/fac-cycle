/* eslint-disable react/jsx-no-bind */
import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      category: 'all',
    };
  }
  handleInput(event) {
    console.log(this.state.keyword);
    this.setState({ keyword: `${event.target.value}` });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.store.dispatch({
      type: 'UPDATE_INPUT',
      keyword: this.state.keyword,
    });
  }
  handleSelect(event) {
    this.props.store.dispatch({
      type: 'UPDATE_CATEGORY',
      category: event.target.value,
    });
  }
  handleClick() {
    this.props.store.dispatch({
      type: 'GET_ITEMS',
      keyword: event.target.value,
      async: true,
    });
  }

  render() {
    const dropdown =
    ['all', 'junk', 'utensils', 'rabbits', 'wigs', 'slaves']
    .map((selectValue, i) =>
      <option
        key={i}
        className="dropdownOption"
        value={selectValue}
      >{selectValue}
      </option>
    );
    return (
      <div>
        <select
          className="dropdown"
          onChange={this.handleSelect.bind(this)}
        >{dropdown}
        </select>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleInput.bind(this)}
          />
        </form>
        <button onClick={this.handleClick.bind(this)} className="searchButton">GO!</button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  store: {
    dispatch: React.PropTypes.dispatch,
  },
};

export default SearchForm;
