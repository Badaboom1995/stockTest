import { combineReducers } from "redux";
import { userReducer } from "./modules/user/userReducer";
import { chatReducer } from "./modules/chat/chatReducer";
import { generalReducer } from "./modules/general/generalReducer";
import { all } from "redux-saga/effects";
import chatSaga from "./modules/chat/sagas";

export function* rootSaga() {
  yield all([chatSaga()]);
}

export const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  general: generalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
