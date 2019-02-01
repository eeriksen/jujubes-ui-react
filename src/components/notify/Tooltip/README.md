# Tooltip

### Description
The `<Tooltip />` is used when you want to display a short popup message on hovering or clicking an element.
Wrap the element that should trigger the tooltip, with the `<Tooltip />` tag.

### Usage
```javascript
import { Tooltip } from "tv2-ui-react"
```

```jsx
<Tooltip title="This is a tooltip">
    Hover to show tooltip
</Callout>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | *no* | null | The tooltip text. |
| `position` | string | *no* | top | The default position of the tooltip. `top, bottom, left, right` |
| `disabled` | bool | *no* | false | Disable showing the tooltip. |
| `trigger` | string | *no* | mouseenter focus | How to trigger the tooltip. `mouseenter focus click manual` |
