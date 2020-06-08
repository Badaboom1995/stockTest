import { put, takeEvery, all } from "redux-saga/effects";
import { SEND_MESSAGE, MESSAGE_RECIEVED } from "./actionTypes";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* messageRecieved(action) {
  const { text, author } = action;
  yield delay(500);
  yield put({ type: MESSAGE_RECIEVED, text, author });
}

function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, messageRecieved);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* chatSaga() {
  yield all([watchSendMessage()]);
}
