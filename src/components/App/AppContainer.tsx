import React from "react";
import Chat from "src/components/Chat/Chat";
import { FlexWrapper } from "src/components/shared";
import { Wrapper } from "./styled";
function AppContainer() {
  return (
    <FlexWrapper>
      <Chat></Chat>
    </FlexWrapper>
  );
}
export default AppContainer;
