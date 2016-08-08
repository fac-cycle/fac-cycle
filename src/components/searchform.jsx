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
    this.props.store.dispatch({
      type: 'UPDATE_INPUT',
      keyword: event.target.value,
    });
  }
  handleSelect(event) {
    this.props.store.dispatch({
      type: 'UPDATE_CATEGORY',
      category: event.target.value,
    });
  }
  // handleClick() {
  //   console.log('mwahahaha', this.state.keyword, this.state.category);
  // }

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
        <input
          type="text"
          value={this.state.keyword}
          onChange={this.handleInput.bind(this)}
        />
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
