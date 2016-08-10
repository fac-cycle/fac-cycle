

module.exports = (state, action) => {
  action.end({
    keyword: action.keyword,
  });
};
