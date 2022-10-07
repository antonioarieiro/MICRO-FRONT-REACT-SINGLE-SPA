import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@kinergy/kinergy-front",
  app: () => System.import("@kinergy/kinergy-front"),
  activeWhen: (location) => !location.pathname.includes('/social')
});


registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname.includes('/social')
});

// registerApplication({
//   name: "@kinergy/navbar",
//   app: () => System.import("@kinergy/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
