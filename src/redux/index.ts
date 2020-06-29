import { combineReducers } from "redux";
import { chartReducer } from "./modules/chart/chartReducer";
import { generalReducer } from "./modules/general/generalReducer";
import { all } from "redux-saga/effects";
import chartSaga from "./modules/chart/sagas";

export function* rootSaga() {
  yield all([chartSaga()]);
}

export const rootReducer = combineReducers({
  chart: chartReducer,
  general: generalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
