import { core } from "../../core/index";
import { PERSISTENCE } from "../moduleNames";
import { broadcaster } from "../../native-middleware/index";
const __middleware = [broadcaster]; //TODO: implement broadcast middleware here
export const remember = (component, value, middleware = []) => {
    const consolidatedMiddleWare = [...__middleware, ...middleware];
    core
        .put(consolidatedMiddleWare)
        .module(PERSISTENCE)
        .component(component, value);
};
