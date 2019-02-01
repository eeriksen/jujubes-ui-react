# Callout

### Description
The `<Callout />` is used when you want to display a static message on the page that should
draw more attention than the rest of the content.
The callout comes in five different types: "default", "info", "success", "warning" and "error".

### Usage
```javascript
import { Callout } from "tv2-ui-react"
```

```jsx
<Callout title="Info!" type="info">
    This is an info callout where you can write something.
</Callout>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | *no* | null | The type of the callout determined the color. |
| `title` | string | *no* | null | A title to be displayed above the content. |
