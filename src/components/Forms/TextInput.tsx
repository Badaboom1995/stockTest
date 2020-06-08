import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 6px;
  margin-bottom: ${props => (props.last ? "0" : "15px")};
  margin-right: 15px;
  font-family: "Roboto", "Segoe UI";
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  min-width: 150px;
  flex-grow: ${props => props.grow || 0};
`;

const TextFieldStyled = styled(TextField)`
  flex-grow: 1;
`;

const SignupForm = props => {
  const id = uuidv4();
  const isError = Boolean(
    props.formik.touched[props.name] && props.formik.errors[props.name]
  );
  const errorText = props.formik.errors[props.name];
  return (
    <Wrapper grow={props.grow} last={props.last}>
      <TextFieldStyled
        multiline={props.multiline}
        rowsMax={props.rows}
        variant="outlined"
        error={isError}
        helperText={errorText}
        id={id}
        name={props.name}
        type={props.type ? props.type : "text"}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values[props.name]}
        label={props.children}
      />
    </Wrapper>
  );
};

export default SignupForm;
