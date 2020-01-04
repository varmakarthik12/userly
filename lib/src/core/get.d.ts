import { middleWaresType } from "../types/core/coreTypes";
export declare const get: (...middleWare: middleWaresType) => {
    module: (moduleName: string) => {
        component: (component: string) => any;
    };
};
