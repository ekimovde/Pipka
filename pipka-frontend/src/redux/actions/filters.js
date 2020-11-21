const actions = {
  categoryNotes: (categoryName) => ({
    type: "FILTERS:SET_CATEGORY",
    payload: categoryName,
  }),
  sortByNotes: (sortByType) => ({
    type: "NOTES:SET_SORT_BY",
    payload: sortByType,
  }),
};

export default actions;
