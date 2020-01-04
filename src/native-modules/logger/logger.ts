import { argsType } from "../../types/native-modules/logger/loggerTypes";
import { core } from "../../core/index";
import { LOGGER } from "../moduleNames";

const onLogger = (type: string, args: argsType) => {
  const timestamp = new Date().getTime().toString();
  core
    .put()
    .module(LOGGER)
    .component(`${type}-${timestamp}`, JSON.parse(JSON.stringify(args)));
};

export const loggerSubscription = (
  persist: boolean = true,
  onConsole?: any
) => () => {
  //TODO: document this exposed out also document persist toggle to save logs to the persistence
  const proxy = (method: any, type: string) => {
    return (...args: argsType) => {
      persist && onLogger(type, args);
      onConsole && onConsole(type, args);
      method(...args);
    };
  };

  //Support others later
  console.log = proxy(console.log, "log");
  console.info = proxy(console.info, "info");
  console.warn = proxy(console.warn, "warn");
  console.error = proxy(console.error, "error");
};
