import React, { useEffect } from "react";
import AppContainer from "./AppContainer";
import { getValues } from "src/redux/modules/chart/chartActions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  dispatch(getValues());
  useEffect(() => {
    const chartTimer = setInterval(() => {
      dispatch(getValues());
    }, 1000);
  });
  return <AppContainer />;
}
export default App;
