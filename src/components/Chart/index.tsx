import React from "react";
import Container from "./container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ChangeValue, editValue } from "src/redux/modules/chart/chartActions";

function Chart() {
  const dispatch = useDispatch();
  const onCellChange = (index, value, stock) => {
    dispatch(ChangeValue(index, value, stock));
  };
  const switchEdit = () => {
    dispatch(editValue());
  };
  const NASDAQ = useSelector((state: any) => state.chart.NASDAQ);
  const CAC40 = useSelector((state: any) => state.chart.CAC40);
  const getLabels = dataset => {
    let labels: Array<number> = [];
    for (let i = 0; i < dataset.length; i++) {
      labels = [...labels, i + 1];
    }
    return labels;
  };
  const data = {
    labels: getLabels(NASDAQ),
    datasets: [
      {
        label: "NASDAQ",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: NASDAQ
      },
      {
        label: "CAC40",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "red",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: CAC40
      }
    ]
  };
  return (
    <Container
      onCellChange={onCellChange}
      switchEdit={switchEdit}
      NASDAQ={NASDAQ}
      CAC40={CAC40}
      data={data}
    />
  );
}
export default Chart;
