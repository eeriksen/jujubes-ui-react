# Progress Circle

### Description
The `<ProgressCircle />` component is great for showing progress when uploading files to a server.

### Usage
```javascript
import { ProgressCircle } from "tv2-ui-react"
```

```jsx
<ProgressCircle percent={80}>
    Uploading file...
</ProgressCircle>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `percent` | number | *no* | null | Progress percentage value. |
| `type` | bool | *no* | true | The color of the bar. ("success", "error"). |
| `animation` | bool | *no* | true | Show bar animation. |
| `circle` | bool | *no* | false | Show progress circle. |
