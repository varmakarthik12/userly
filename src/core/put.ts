import {
  middleWaresType,
  moduleNameType,
  __onPutType,
  componentNameType,
  valueType
} from "../types/core/coreTypes";
import { __OUTLET, __USER, __STORE } from "../common/init";

export const updateStore = (levels: string[], value: any) => {
  const max_level = levels.length - 1;
  let target = __STORE;
  levels.some(function(level, i) {
    if (typeof level === "undefined") {
      return true;
    }
    if (i === max_level) {
      target[level] = value;
    } else {
      var obj = target[level] || {};
      target[level] = obj;
      target = obj;
    }
  });
};

const __onPut: __onPutType = (
  middleWares,
  __USER,
  moduleName,
  componentName,
  value
) => {
  //TODO: integrate middlewares
  //Just dispatch to outlet and let it worry about this
  middleWares &&
    middleWares.map(each => {
      each(moduleName, componentName, value);
    });

  updateStore([moduleName, componentName], value);
  const currentComponentValue = __STORE[moduleName][componentName];
  __OUTLET(__USER, moduleName, componentName, currentComponentValue);
};

export const put = (middleWares: middleWaresType = []) => {
  return {
    module: (moduleName: moduleNameType) => {
      return {
        component: (componentName: componentNameType, value: valueType) => {
          return __onPut(middleWares, __USER, moduleName, componentName, value);
        }
      };
    }
  };
};

//middlewares is an array of middle wares

//middlewarename //moduke //module_key //module_value

//only push to broacast-channel only if broad-cast channel is supported
//else throw a error or don't broadcast...
//Polyfill ?

///where to put is  a middleware where we now publish just one middleware that work on websock this is the inbuilt one
