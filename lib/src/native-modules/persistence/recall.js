import { core } from "../../core/index";
import { PERSISTENCE } from "../moduleNames";
let __middleware = []; //__Native middlewares here// TODO: write shape shifters here if we have bandwidth // of expose this to recall
export const recall = (component, middleware) => {
    const consolidatedMiddleWare = middleware
        ? [...__middleware, ...middleware]
        : [...__middleware];
    return core
        .get(consolidatedMiddleWare)
        .module(PERSISTENCE)
        .component(component);
};
