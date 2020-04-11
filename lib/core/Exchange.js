"use strict";

const generateAuthHeader = require("../helpers/generateAuthHeader");

/**
 * Create a new instance of the Exchange client
 * @param {Object} instanceConfig The default config for the instance
 */
function Exchange(instanceConfig) {
  this.defaults = {
    ...instanceConfig,
    headers: generateAuthHeader(instanceConfig),
  };
}

/**
 * Returns all orgs if the user is an admin
 */
Exchange.prototype.getOrgs = function () {};

/**
 * Returns all nodes in the user's org
 */
Exchange.prototype.getNodes = function () {};

/**
 * Returns all services in the user's org by default.
 * If `allOrgs: true` is passed, returns all services from
 *  the user's org, combined with all public services from
 *  other orgs in the Exchange
 */
Exchange.prototype.getServices = function (allOrgs) {};

/**
 * Returns all patterns in the user's org by default.
 * If `allOrgs: true` is passed, returns all patterns from
 *  the user's org, combined with all public patterns from
 *  other orgs in the Exchange
 */
Exchange.prototype.getPatterns = function (allOrgs) {};

/**
 * Returns all policies in the user's org
 */
Exchange.prototype.getPolicies = function () {};
