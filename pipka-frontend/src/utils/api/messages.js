import axios from "axios";

export default {
  getAllByDialogId: (dialogId) => axios.get(`/messages?dialog=${dialogId}`),
  send: (text, dialogId) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
    }),
  removeById: (id) => axios.delete(`/messages?id=${id}`),
};
