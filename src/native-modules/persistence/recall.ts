import { core } from "../../core/index";
import { middleWaresType } from "../../types/core/coreTypes";
import { PERSISTENCE } from "../moduleNames";
import { recallType } from "../../types/native-modules/persistence/persistenceTypes";

let __middleware: middleWaresType = []; //__Native middlewares here// TODO: write shape shifters here if we have bandwidth // of expose this to recall
export const recall: recallType = (component, middleware) => {
  const consolidatedMiddleWare = middleware
    ? [...__middleware, ...middleware]
    : [...__middleware];
  return core
    .get(consolidatedMiddleWare)
    .module(PERSISTENCE)
    .component(component);
};
