# PopupYesNo

### Description
Often, you would want the user to confirm a critical action. This might be when the user
is about to delete something. The `<PopupYesNo />` component let's you prompt the user
with a question, where the user can answer either yes or no.

### Usage
```javascript
import { PopupYesNo } from "tv2-ui-react"
```

```jsx
<PopupYesNo
    title="Are you sure?"
    onYes={() => console.log("YES")}
    onNo={() => console.log("NO")}>
    Are you absolutely positively sure you want to perform the following action?
</PopupYesNo>
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | *no* | null | The title of the alert. |
| `onYes()` | func | *no* | null | Callback triggered when the user clicks "Yes". |
| `onNo()` | func | *no* | null | Callback triggered when the user clicks "No". |
| `visible` | bool | *no* | true | Indicates if the popup is visible or not. |
