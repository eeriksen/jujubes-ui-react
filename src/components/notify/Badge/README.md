# Badge

### Description
Use `<Badge />` to display statuses or when you want words to pop.

### Usage
```jsx
<Badge>Default badge</Badge>
<Badge fill>Filled badge</Badge>
<Badge type="primary">Primary badge</Badge>
<Badge type="info">Info badge</Badge>
<Badge type="success">Success badge</Badge>
<Badge type="warning">Warning badge</Badge>
<Badge type="error">Error badge</Badge>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | *no* | null | Set the color on the badge. (primary, info, success, warning, error) |
| `fill` | bool | *no* | false | Make badge filled with color instead of bordered. |
