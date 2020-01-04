import { broadcast_outlet } from "./outlets/broadcast/broadcast";
import { USERLY_CHANNEL } from "./constants";
import { broadcaster } from "./inlets/broadcast/broadcast";
import { broadcastPolyfil } from "./polyfil/polyfil";
let broadcastObject = undefined;
export const broadcastSubscription = () => {
    broadcastPolyfil();
    if (BroadcastChannel) {
        broadcastObject = new BroadcastChannel(USERLY_CHANNEL);
        broadcast_outlet(broadcastObject);
    }
    else {
        console.error("Might need to pollyfill BroadcastChannel");
    }
};
export { broadcastObject, broadcaster };
