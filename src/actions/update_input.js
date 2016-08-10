

module.exports = (state, action) => {
  console.log(action.keyword);
  action.end({
    keyword: action.keyword,
  });
};
