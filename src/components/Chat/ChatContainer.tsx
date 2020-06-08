import React, { useRef, useEffect } from "react";
import {
  MessagesArea,
  ChatWindow,
  ChatForm,
  MessageTitle,
  HideButton,
  ChatHeader
} from "./styled";
import TextInput from "src/components/Forms/TextInput";
import Button from "@material-ui/core/Button";
import { Paragraph } from "../typography";

function ChatContainer(props: ChatInterface) {
  const { chat, formik, setVisibility, visible } = props;
  const myMessages = useRef(document.createElement("div"));

  useEffect(() => {
    myMessages.current.scrollTop = myMessages.current.scrollHeight;
  }, [props.chat.messages]);

  return (
    <ChatWindow noHover>
      <ChatHeader>
        <HideButton
          hide={visible}
          onClick={() => {
            const isVisible = visible ? false : true;
            setVisibility(isVisible);
          }}
        ></HideButton>
      </ChatHeader>
      <MessagesArea hide={visible} ref={myMessages}>
        {chat.messages.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            <MessageTitle>{item.author}</MessageTitle>
            <Paragraph>{item.text}</Paragraph>
          </div>
        ))}
      </MessagesArea>
      <ChatForm hide={visible} onSubmit={formik.handleSubmit}>
        <TextInput
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          name={"author"}
          value={formik.values.name}
          formik={formik}
        >
          Name
        </TextInput>
        <div style={{ width: "100%", display: "flex" }}>
          <TextInput
            formik={formik}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.text}
            name={"text"}
            grow={1}
            last
            multiline
            rowsMax={10}
          >
            Write a message
          </TextInput>
          <Button disabled={chat.loadingMessage} size="medium" type="submit">
            {chat.loadingMessage ? "Loading..." : "Send"}
          </Button>
        </div>
      </ChatForm>
    </ChatWindow>
  );
}

export default ChatContainer;

interface ChatInterface {
  formik: any;
  chat: any;
  scrollDown: any;
  visible: Boolean;
  setVisibility: any;
}
