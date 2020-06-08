import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendMessage } from "src/redux/modules/chat/chatActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Chat() {
  const [visible, setVisibility] = useState();
  const dispatch = useDispatch();
  const chat = useSelector((state: any) => state.chat);
  const scrollDown = () => {
    console.log("scrolled");
  };
  const formik = useFormik({
    initialValues: {
      author: "",
      text: ""
    },
    validationSchema: Yup.object({
      author: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      text: Yup.string()
        .required("Required")
        .max(250, "Must be 250 characters or less")
    }),
    onSubmit: values => {
      dispatch(sendMessage(values.text, values.author));
    }
  });
  return (
    <ChatContainer
      visible={visible}
      formik={formik}
      chat={chat}
      scrollDown={scrollDown}
      setVisibility={setVisibility}
    />
  );
}
export default Chat;
