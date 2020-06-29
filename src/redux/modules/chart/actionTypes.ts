export const GET_VALUES = "chart/GET_VALUES";
export const VALUES_RECIEVED = "chart/VALUES_RECIEVED";
export const CHANGE_VALUE = "chart/CHANGE_VALUE";
export const EDIT_VALUE = "chart/EDIT_VALUE";

export interface GetValuesInterface {
  type: typeof GET_VALUES;
}
export interface ChangeValueInterface {
  type: typeof CHANGE_VALUE;
  index: number;
  newValue: number;
  stock: string;
}
export interface ValuesRecievedInterface {
  type: typeof VALUES_RECIEVED;
  CAC40: Array<number>;
  NASDAQ: Array<number>;
}
export interface EditValueInterface {
  type: typeof EDIT_VALUE;
}

export type ChartActionTypes =
  | GetValuesInterface
  | ValuesRecievedInterface
  | ChangeValueInterface
  | EditValueInterface;
