import { axios } from "core";

export default {
  getAllNotes: () => axios.get("/notes"),
};
