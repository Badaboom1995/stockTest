import React from "react";
import { FlexWrapper } from "src/components/shared";
import Chart from "src/components/Chart";
import ValuesTable from "src/components/ValuesTable";
function AppContainer() {
  return (
    <FlexWrapper>
      <Chart></Chart>
      <ValuesTable></ValuesTable>
    </FlexWrapper>
  );
}
export default AppContainer;
