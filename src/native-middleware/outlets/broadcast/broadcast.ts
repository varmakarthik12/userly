import { updateStore } from "../../../core/put";
import { __STORE } from "../../../common/init";

export const broadcast_outlet = (broadcastObject: any) => {
  broadcastObject.onmessage = (e: any) => {
    const [moduleName, component, value] = e.data;
    updateStore([moduleName, component], value);
  };
};
