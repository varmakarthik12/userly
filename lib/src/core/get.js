import { __STORE } from "../common/init";
const __onGet = (middleWare, moduleName, component) => {
    var _a, _b;
    //TODO: take care of middleware to modify data
    return (_b = (_a = __STORE) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[component];
};
export const get = (...middleWare) => {
    return {
        //TODO: might need to add data expectation something like that here
        module: (moduleName) => {
            return {
                component: (component) => {
                    return __onGet(middleWare, moduleName, component);
                }
            };
        }
    };
};
//Possible syntax = get.middleWare("some middleware name").component("component name")
