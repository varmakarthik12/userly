export type storeType = any;
export type __userType = string;
export type __OUTLETType = any;
export type onOutLetType = any; //TODO:
export type subscribeMiddlewareType = any[];
export type __onInitType = (
  user_identifier: __userType,
  store: storeType,
  onOutLet: onOutLetType,
  subscribeMiddleware?: subscribeMiddlewareType
) => {
  __STORE: storeType;
  __USER: __userType;
  __OUTLET: onOutLetType;
};
export type initType = (
  user_identifier: __userType,
  subscribeMiddleware?: subscribeMiddlewareType
) => any; //TODO type
