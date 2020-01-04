import { updateStore } from "../../../core/put";
export const broadcast_outlet = (broadcastObject) => {
    broadcastObject.onmessage = (e) => {
        const [moduleName, component, value] = e.data;
        updateStore([moduleName, component], value);
    };
};
