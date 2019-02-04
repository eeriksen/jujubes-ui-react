# Progress Bar

### Description
The `<ProgressBar />` component is great for showing progress when uploading files to a server.

### Usage
```javascript
import { ProgressBar } from "tv2-ui-react"
```

```jsx
<ProgressBar percent={80}>
    Uploading file...
</ProgressBar>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `percent` | number | *no* | null | Progress percentage value. |
| `type` | bool | *no* | true | The color of the bar. ("success", "error"). |
| `animation` | bool | *no* | true | Show bar animation. |
| `circle` | bool | *no* | false | Show progress circle. |
