export declare type storeType = any;
export declare type __userType = string;
export declare type __OUTLETType = any;
export declare type onOutLetType = any;
export declare type subscribeMiddlewareType = any[];
export declare type __onInitType = (user_identifier: __userType, store: storeType, onOutLet: onOutLetType, subscribeMiddleware?: subscribeMiddlewareType) => {
    __STORE: storeType;
    __USER: __userType;
    __OUTLET: onOutLetType;
};
export declare type initType = (user_identifier: __userType, subscribeMiddleware?: subscribeMiddlewareType) => any;
