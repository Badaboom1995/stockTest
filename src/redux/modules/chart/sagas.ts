import { put, takeEvery, all, select } from "redux-saga/effects";
import { GET_VALUES, VALUES_RECIEVED } from "./actionTypes";
import ChartService from "src/services/chart";

function* valuesRecieved() {
  const isEditing = yield select(state => state.chart.editing);
  let NASDAQ = yield select(state => state.chart.NASDAQ);
  let CAC40 = yield select(state => state.chart.CAC40);
  console.log(isEditing);
  if (!isEditing) {
    const Request = new ChartService();
    const values = yield Request.getValues(20);
    NASDAQ = values.map(item => item.stocks.NASDAQ);
    CAC40 = values.map(item => item.stocks.CAC40);
  }
  yield put({ type: VALUES_RECIEVED, NASDAQ, CAC40 });
}

function* watchGetValues() {
  yield takeEvery(GET_VALUES, valuesRecieved);
}

export default function* chartSaga() {
  yield all([watchGetValues()]);
}
