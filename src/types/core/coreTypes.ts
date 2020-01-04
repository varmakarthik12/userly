import { __userType } from "../common/init";

export type middleWaresType = any[];
export type moduleNameType = string;
export type componentNameType = string;
export type valueType = any; //TODO: make this as generic
export type __onPutType = (
  middleWares: middleWaresType,
  __USER: __userType,
  moduleName: moduleNameType,
  componentName: componentNameType,
  value: valueType
) => any; //TODO: convert this as a generic
export type __onGetType = (
  middleWares: middleWaresType,
  moduleName: moduleNameType,
  componentName: componentNameType
) => any; //TODO: convert this as a generic
