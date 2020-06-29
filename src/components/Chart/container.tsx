import React from "react";
import { Line } from "react-chartjs-2";
import { StockRow, StockCell, StockRowTitle } from "./styled";
import TextField from "@material-ui/core/TextField";

function Container(props: ChartContainerInterface) {
  const { CAC40, NASDAQ, data, onCellChange, switchEdit } = props;
  return (
    <div>
      <Line width={1000} height={500} data={data} />
      <table>
        <tbody>
          <StockRow>
            <StockRowTitle>NASDAQ</StockRowTitle>
            {NASDAQ.map((item, index) => (
              <StockCell key={index}>
                <TextField
                  onChange={e => {
                    onCellChange(index, e.target.value, "NASDAQ");
                  }}
                  onFocus={switchEdit}
                  onBlur={switchEdit}
                  value={item}
                ></TextField>
              </StockCell>
            ))}
          </StockRow>
          <StockRow>
            <StockRowTitle>CAC40</StockRowTitle>
            {CAC40.map((item, index) => (
              <StockCell key={index}>
                <TextField
                  onChange={e => {
                    onCellChange(index, e.target.value, "CAC40");
                  }}
                  onFocus={switchEdit}
                  onBlur={switchEdit}
                  value={item}
                ></TextField>
              </StockCell>
            ))}
          </StockRow>
        </tbody>
      </table>
    </div>
  );
}
export default Container;

interface ChartContainerInterface {
  onCellChange: any;
  switchEdit: any;
  NASDAQ: Array<number>;
  CAC40: Array<number>;
  data: any;
}
