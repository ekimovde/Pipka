import axios from 'axios';

export default {
  getAllByDialogId: (dialogId) => axios.get(`/messages?dialog=${dialogId}`)
}