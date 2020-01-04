import { core } from "../../core/index";
import { PERSISTENCE } from "../moduleNames";
import { middleWaresType } from "../../types/core/coreTypes";
import { rememberType } from "../../types/native-modules/persistence/persistenceTypes";
import { broadcaster } from "../../native-middleware/index";

const __middleware: middleWaresType = [broadcaster]; //TODO: implement broadcast middleware here
export const remember: rememberType = (component, value, middleware = []) => {
  const consolidatedMiddleWare = [...__middleware, ...middleware];
  core
    .put(consolidatedMiddleWare)
    .module(PERSISTENCE)
    .component(component, value);
};
