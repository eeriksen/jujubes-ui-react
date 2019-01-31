# Badge

### Description
Use `<Badge />` to display statuses or when you want words to pop.

### Usage
```jsx
<Badge>Default badge</Badge>
<Badge fill>Filled badge</Badge>
<Badge color="primary">Primary badge</Badge>
<Badge color="info">Info badge</Badge>
<Badge color="success">Success badge</Badge>
<Badge color="warning">Warning badge</Badge>
<Badge color="error">Error badge</Badge>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | *no* | null | Set the color on the badge. (primary, info, success, warning, error) |
| `fill` | bool | *no* | false | Make badge filled with color instead of bordered. |
| `round` | bool | *no* | false | Badge with completely rounded edges. Nice for counters. |
