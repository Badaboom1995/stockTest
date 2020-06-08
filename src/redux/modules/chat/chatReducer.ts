import { SEND_MESSAGE, ChatActionTypes, MESSAGE_RECIEVED } from "./actionTypes";

const initialState = {
  messages: [],
  loadingMessage: false
};

export function chatReducer(state = initialState, action: ChatActionTypes) {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, loadingMessage: true };
    case MESSAGE_RECIEVED:
      return {
        ...state,
        messages: [
          { text: action.text, author: action.author },
          ...state.messages
        ],
        loadingMessage: false
      };
    default:
      return state;
  }
}
