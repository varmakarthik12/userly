# userly

A framework that makes persisting user data as simple as calling a method. The data stays even after page load / reloads, even after opening a new instance in a new tab or in a new browser or even in a complete different machine. Where you want to store this data is completely up to you.

This has two main component's called subscriptions and modules. A subscription is a middleware that can feed or listen to a data and internally connects to a module. A module can persist or retrieve a module specific data from a store. You can also add custom subscriptions and modules as per your usage.

#### What come's out of the box

- A persistence module that can store user preference's like column customization, column order, sort order, or any intermediate state. This can also be subscribed to a middleware which can broadcast this information to other opened instances of the app like windows, tabs & frames and syncs the store with the same data without a reload or an additional api call.
- A subscription that can subscribe to native window.console message's and store in either the same place where the user data is stored or can push to a syslogger like splunk with the comfort of using the same native console api's like `console.log`, `console.info`, `console.warn`. You can also control to show or not to show this logs in dev tools.
- A broadcast subscription talked above that can broadcast every data updates to other opened instances of the app so that you don't have to worry about syncing the same data across window's, tabs & frames without a reload or an api call.

### Installing

1. Install using `npm install userly`.
2. Initialise userly in the root file of the app.

```
import { init } from "userly";

init("some_user_identifier", [subscriptions]).initialStore(initialStore).outlet(outlet);
```

`subscriptions` are the middleware you want to subscribe to, `initialStore` is the initial data of the user - This can be a object containing the information that you already know about the user intial store should have a schema that can be consumed by userly more about the schema below, `outlet` is a function that gets three arguments `module_name`, `component_name`, `data`. You can decide where to put this data here. This can be an http call or a webSock stream that feed to a persistence in the backend.

### Intial Store schema 

Userly expects the intial store schema in a simple consumable pattren described below.

```
{
    "ModuleName": {
        "componentName": "componentValue",
        "componentName2": "some component value"
    },
    "__PERSISTANCE"":{
        "column_sort_order": {
            field: "title",
            order: "ASC"
        }
    }
}
```
This is just a simple module containing module object pattren. `outlet` will also follow the same pattrent when triggering an event to a store, More about outlet below.

### Outlet in Userly
Outlet is what decides where to put the information that userly knows. This can be a browser store or a REST call or even a websocket message. This is generally a event listner which will be triggered when ever userly modules want to post some data to the store. Where you store this info is completly up to the consumer. Here is a simple snippet on the usage.

```
const ws = new WebSocket("ws://localhost:3000/put");
const user = "some-unique-user-identifier";
const initialStore = await (await fetch(`http://localhost:3000/get/${user}`)).json();
const outlet = (__USER_IDENTIFIER, moduleName, componentName, currentComponentValue) => {
    ws.send(JSON.stringify(__USER_IDENTIFIER, moduleName, componentName, currentComponentValue))
}
init(user, [broadcastMiddleware, loggerMiddleware()]).initialStore(initialStore).outlet(outlet);
```
A outlet will be provided with all the necessary info that a store should know to persist userly data. Think of simple persistance call `persistence.remember("my_favorites", "I love starwars");` now the outlet will get below arguents `"some-unique-user-identifier", "__PERSISTANCE", "my_favorites", "I love starwars"`.

#### Subscribing to a subscription

You can subscribe to a subscription like.

```
import {init, broadcastSubscription, loggerSubscription} from "userly";

init(user, [broadcastSubscription, loggerSubscription(persist, callback, showLogs)]).initialStore(initialStore).outlet(outlet);
```

These subscriptions can also take config / contexts on how to behave. The `loggerSubscription` here can take arguments like `persist` which decides to persist logs to user data store, `callback` is a function that gives `log message`, `log type` as arguments so that you can push this logs to a sysLog like splunk, `showLogs` decides weather to show logs in dev-tools.

### Using persistence module

Persistence is an inbuilt module that targets to store and retrieve any user specific data like user preferences.

```
import { persistence } from "userly";
```

You can store something to the persistence using the `remember` api.

```
persistence.remember("column_sort_order", {
    field: "title",
    order: "ASC"
} );
```

You can retrieve some information from the persistence store using the `recall` api.

```
persistence.recall("column_sort_order"); // out:- {field: "title", order: "ASC"}
```

This module internally subscribes to the broadcaster subscription. So every remember call will initiate a broadcast even to other instance of the app and merges this information to their store.