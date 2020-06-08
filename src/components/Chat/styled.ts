import styled from "styled-components";
import { Card } from "src/components/shared";

export const ChatWindow = styled(Card)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 500px;
  right: 30px;
  bottom: 30px;
`;
export const ChatForm = styled.form`
  position: relative;
  border-top: 1px solid black;
  padding: 20px;
  box-sizing: border-box;
  display: ${props => (props.hide ? "none" : "flex")};
  flex-wrap: wrap;
`;
export const ChatHeader = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row-reverse;
`;
export const MessagesArea = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: ${props => (props.hide ? "none" : "flex")};
  height: 300px;
  overflow: scroll;
  flex-direction: column-reverse;
`;
export const Message = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;
export const MessageTitle = styled.p`
  font-size: 16px;
  color: #3066be;
  text-transform: capitalize;
`;
export const HideButton = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000;
    transform: ${props =>
      props.hide
        ? "translate(-50%, -50%)"
        : "translate(-50%, -50%) rotate(-45deg)"};
  }
  &:before {
    transform: ${props =>
      props.hide
        ? "translate(-50%, -50%)"
        : "translate(-50%, -50%) rotate(45deg)"};
  }
`;
