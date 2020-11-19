const initialState = {
  categoryNotes: null,
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case "NOTES:SET_CATEGORY":
      return {
        ...state,
        categoryNotes: payload,
      };
    default:
      return state;
  }
};

export default filters;
