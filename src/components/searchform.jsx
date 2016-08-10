/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchForm extends React.Component {
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
      <div className="searchInputForm">
        <select
          className="dropdown"
        >{dropdown}
        </select>
        <input
          type="text"
        />
        <button className="searchButton">GO!</button>
      </div>
    );
  }
}

export default SearchForm;
