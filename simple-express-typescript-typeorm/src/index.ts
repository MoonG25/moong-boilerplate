/**
 * SET GLOBAL DATA
 */
global.NODE_ENV = process.env.NODE_ENV;

/**
 * IMPORT CONFIG FILE
 */

/**
 * SET PORT
 */
const port = process.env.PORT || 20000;

/**
 * IMPORT EXPRESS SERVER & CONTROLLERS
 */
import App from "./app";

const app = new App(
  port,
  [
    // controllers
  ]
);

/**
 * START SERVER
 */
app.listen();