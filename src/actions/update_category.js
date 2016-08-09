

module.exports = (state, action) => {
  action.end({
    category: action.category,
  });
};
