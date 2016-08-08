
module.exports = (state, action) => {
  const newListings = state.listings.filter((el) => {
    return action.searchString === el.title;
  });

  const newState = {
    listings: newListings,
  };
  return newState;
};
