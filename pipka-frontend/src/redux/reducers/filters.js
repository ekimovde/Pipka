const initialState = {
  categoryNotes: null,
  sortByNotes: {
    type: "title",
    order: "asc",
  },
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTERS:SET_CATEGORY":
      return {
        ...state,
        categoryNotes: payload,
      };
    case "NOTES:SET_SORT_BY":
      return {
        ...state,
        sortByNotes: payload,
      };
    default:
      return state;
  }
};

export default filters;
