import { SEND_MESSAGE, SendMessageInterface } from "./actionTypes";

export const sendMessage = (
  text: string,
  author: string
): SendMessageInterface => ({
  type: SEND_MESSAGE,
  text,
  author
});

export default {
  sendMessage
};
