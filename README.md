# Exchange.js

## Example

### Instantiation

Creates a new client instance that is connected to an Exchange API in the configs.

```javascript
const config = {
  org: "mycluster",
  token: "token123",
  apiKey: "key123",
  url: "https://localhost:9090/ec-exchange/v1",
};

const Exchange = require("exchange")(config);
```

### Get orgs

Only the Admin or root authenticated user can get all orgs.

```javascript
Exchange.getOrgs();
```

### Get nodes

Returns nodes from your own org

```javascript
Exchange.getNodes();
```

### Get services

If allOrgs is `true` then all services are returned from your org, plus public services from every other org

```javascript
Exchange.getServices(allOrgs);
```

### Get deployment patterns

If allOrgs is `true` then all services are returned from your org, plus public services from every other org

```javascript
Exchange.getPatterns(allOrgs);
```

### Get deployment policies

Returns policies for your own org

```javascript
Exchange.getPolicies();
```
