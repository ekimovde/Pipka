import { axios } from "core";

export default {
  getAllNotes: (categoryNotes, sortByNotes) =>
    axios.get(
      `/notes?${
        categoryNotes === null ? "" : `statusNotes=${categoryNotes}`
      }&_sort=${sortByNotes.type}&_order=${sortByNotes.order}`
    ),
};

// ?_sort=title&_order=desc
