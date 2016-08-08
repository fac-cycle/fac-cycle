
module.exports = (state, action) => {
  const newListings = state.listings.filter((el) => action.searchString === el.title);

  const newState = {
    listings: newListings,
  };
  return newState;
};
