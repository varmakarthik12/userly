import { broadcastObject } from "../../index";
export const broadcaster = (...args) => {
    if (!broadcastObject) {
        return console.log("You might need to add broadcastSubscription to userly init");
    }
    broadcastObject.postMessage(args);
};
