export const ANONYMOUS = "ANONYMOUS";
//Default store, user values
let __STORE = {};
let __USER = ANONYMOUS;
let __OUTLET = undefined;
const __onInit = (user_identifier, store, onOutLet, subscribeMiddleware) => {
    var _a;
    __USER = user_identifier;
    __STORE = store;
    __OUTLET = onOutLet;
    //TODO: document the args that are passed to the outlet method
    //initiates all the initiatable middleware
    //TODO: middleware can also be curing methods to pass args and update README- context is passed when declaring a midleware in int
    (_a = subscribeMiddleware) === null || _a === void 0 ? void 0 : _a.map(eachMiddleware => {
        eachMiddleware();
    });
    return {
        __STORE,
        __USER,
        __OUTLET
    };
};
const init = (user_identifier = ANONYMOUS, subscribeMiddleware) => {
    // //TODO: update this type
    // if (config) {
    //   //TODO if not supporting config now comments this
    //   const store = undefined; //TODO:
    //   const outLet = undefined; //TODO:
    //   //TODO: validate config schema and return error if the schema mismatch
    //   return __onInit(user_identifier, store, outLet);
    // }
    // //TODO: Documents two type of initializing
    return {
        initialStore: (store) => {
            //TODO: might need a schema validator at the worst case
            return {
                outlet: (outLet) => {
                    return __onInit(user_identifier, store, outLet, subscribeMiddleware);
                }
            };
        }
    };
};
export { __STORE, __USER, init, __OUTLET };
