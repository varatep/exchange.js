module.exports = function (instanceConfig) {
  if (!instanceConfig.org)
    return "Must provide an org in the instance configuration";
  if (!instanceConfig.token && !instanceConfig.apiKey)
    return "Must provide either a token or API key to the Exchange";

  // By default, use the token if both are provided
  let finalToken = instanceConfig.token || instanceConfig.apiKey;
  if (instanceConfig.token)
    return {
      Authorization: `Basic ${Buffer.from(
        instanceConfig.org + "/iamtoken:" + finalToken
      ).toString("base64")}`,
    };
  else
    return {
      Authorization: `Basic ${Buffer.from(
        instanceConfig.org + "/iamapikey:" + finalToken
      ).toString("base64")}`,
    };
};
