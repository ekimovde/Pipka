import { notesApi } from "utils/api";

const actions = {
  setNotes: (items) => ({
    type: "NOTES:SET_ITEMS",
    payload: items,
  }),
  fetchNotes: (categoryNotes, sortByNotes) => (dispatch) => {
    notesApi.getAllNotes(categoryNotes, sortByNotes).then(({ data }) => {
      dispatch(actions.setNotes(data));
    });
  },
};

export default actions;
