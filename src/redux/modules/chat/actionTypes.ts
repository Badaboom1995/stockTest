export const SEND_MESSAGE = "chat/SEND_MESSAGE";
export const MESSAGE_RECIEVED = "chat/MESSAGE_RECIEVED";

export interface SendMessageInterface {
  type: typeof SEND_MESSAGE;
  text: string;
  author: string;
}
export interface MessageRecievedInterface {
  type: typeof MESSAGE_RECIEVED;
  text: string;
  author: string;
}

export type ChatActionTypes = SendMessageInterface | MessageRecievedInterface;
