import { broadcastObject } from "../../index";

export const broadcaster = (...args: any) => {
  if (!broadcastObject) {
    return console.log(
      "You might need to add broadcastSubscription to userly init"
    );
  }
  broadcastObject.postMessage(args);
};
