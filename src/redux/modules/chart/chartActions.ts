import {
  GET_VALUES,
  CHANGE_VALUE,
  EDIT_VALUE,
  GetValuesInterface,
  ChangeValueInterface,
  EditValueInterface
} from "./actionTypes";

export const getValues = (): GetValuesInterface => ({
  type: GET_VALUES
});
export const editValue = (): EditValueInterface => ({
  type: EDIT_VALUE
});

export const ChangeValue = (
  index: number,
  newValue: number,
  stock: string
): ChangeValueInterface => ({
  type: CHANGE_VALUE,
  index,
  newValue,
  stock
});
