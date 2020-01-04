export declare const core: {
    get: (...middleWare: import("../types/core/coreTypes").middleWaresType) => {
        module: (moduleName: string) => {
            component: (component: string) => any;
        };
    };
    put: (middleWares?: import("../types/core/coreTypes").middleWaresType) => {
        module: (moduleName: string) => {
            component: (componentName: string, value: any) => any;
        };
    };
    updateStore: (levels: string[], value: any) => void;
};
