# PopupMessage

### Description
To simplify displaying a popup with a title and message, you have `<PopupMessage />`.

### Usage
```javascript
import { PopupMessage } from "tv2-ui-react"
```

```jsx
<PopupMessage
    visible={popupVisible}
    type="error"
    title="Error!"
    message="There was an error performing some kind of operation. Please try again."
    onOk={() => console.log("CLOSE THE POPUP")}
/>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | *no* | null | The title of the alert. |
| `message` | string | *no* | null | The message of the alert. |
| `onOk()` | func | *no* | null | Callback triggered when close-button is clicked. |
| `type` | string | *no* | null | Set the color theme on the popup. (success, error) |
| `visible` | bool | *no* | true | Indicates if the popup is visible or not. |
