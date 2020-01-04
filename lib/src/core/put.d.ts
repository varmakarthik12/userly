import { middleWaresType } from "../types/core/coreTypes";
export declare const updateStore: (levels: string[], value: any) => void;
export declare const put: (middleWares?: middleWaresType) => {
    module: (moduleName: string) => {
        component: (componentName: string, value: any) => any;
    };
};
