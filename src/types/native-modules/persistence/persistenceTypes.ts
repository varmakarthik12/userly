import { valueType, middleWaresType } from "../../core/coreTypes";

export type rememberType = (
  component: string,
  value: valueType,
  middleware?: middleWaresType
) => void;
export type recallType = (
  component: string,
  middleware?: middleWaresType
) => valueType; //TODO: this might need to be a  generic
