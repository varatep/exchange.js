"use strict";

const Exchange = require("./core/Exchange");

function createInstance(config) {
  const context = new Exchange(config);
  const instance = bind(Exchange.prototype, context);
}

const exchange = createInstance();
