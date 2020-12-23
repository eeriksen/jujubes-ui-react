# Menu

### Description
The `<Menu />` component is a vertical navigational element that can contains items with counters, icons
and indicators.

### Usage
```jsx
<Menu>
    <MenuHeading label="Menu heading" />
    <MenuItem icon="gear" label="First item" count={8} />
    <MenuItem icon="eye" label="Second item" indicator={<Icon name="warning" warning />} count={23} />
    <MenuItem icon="nodes" label="Third item" count={376} />
    <MenuItem selected icon="palette" label="Fourth item" count={1} />
    <MenuItem icon="user" label="Fifth item" count={6} />
</Menu>
```

### Menu properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `simple` | bool | *no* | false | Simple version of menu, used when embedded in sidebar. |
| `trimmed` | bool | *no* | false | No margin around menu element. |
| `hidden` | bool | *no* | false | Hide menu. |
| `className` | bool | *no* | false | Append custom class name. |

### MenuItem properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `icon` | string | *no* | null | Icon to show on item. |
| `label` | string | *no* | null | Menu item label. |
| `link` | string | *no* | null | React-router link. |
| `selected` | string | *no* | null | Indicates if item is active. This is set automatically if link is same as current location. |
| `count` | number | *no* | null | Show a counter on the item. |
| `indicator` | object | *no* | null | Display a custom indicator, element, badge or something else on an item. |
| `onClick` | func | *no* | null | Item click handler. |

### MenuHeading properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | string | *no* | null | Heading label. |
