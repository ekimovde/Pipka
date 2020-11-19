import { notesApi } from "utils/api";

const actions = {
  setNotes: (items) => ({
    type: "NOTES:SET_ITEMS",
    payload: items,
  }),
  fetchNotes: () => (dispatch) => {
    notesApi.getAllNotes().then(({ data }) => {
      dispatch(actions.setNotes(data));
    });
  },
};

export default actions;
