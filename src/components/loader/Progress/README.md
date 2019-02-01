# Progress

### Description
The `<Progress />` component is great for showing progress when uploading files to a server.
It comes in two variants; as a bar or a circle.

### Usage
```javascript
import { Progress } from "tv2-ui-react"
```

```jsx
<Progress percent={80}>
    Uploading file...
</Progress>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `percent` | number | *no* | null | Progress percentage value. |
| `type` | bool | *no* | true | The color of the bar. ("success", "error"). |
| `animation` | bool | *no* | true | Show bar animation. |
| `circle` | bool | *no* | false | Show progress circle. |
