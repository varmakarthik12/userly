import { valueType, middleWaresType } from "../../core/coreTypes";
export declare type rememberType = (component: string, value: valueType, middleware?: middleWaresType) => void;
export declare type recallType = (component: string, middleware?: middleWaresType) => valueType;
