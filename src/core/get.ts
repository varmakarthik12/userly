import { __STORE } from "../common/init";
import {
  middleWaresType,
  moduleNameType,
  componentNameType,
  __onGetType
} from "../types/core/coreTypes";

const __onGet: __onGetType = (middleWare, moduleName, component) => {
  //TODO: take care of middleware to modify data
  return __STORE?.[moduleName]?.[component];
};

export const get = (...middleWare: middleWaresType) => {
  return {
    //TODO: might need to add data expectation something like that here
    module: (moduleName: moduleNameType) => {
      return {
        component: (component: componentNameType) => {
          return __onGet(middleWare, moduleName, component);
        }
      };
    }
  };
};

//Possible syntax = get.middleWare("some middleware name").component("component name")
