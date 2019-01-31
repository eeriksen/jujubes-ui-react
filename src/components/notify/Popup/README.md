# Popup

### Description
Popups has many use cases; Take input from the user, alert of changes, get user confirmation and more.
The toolkit gives you multiple types of popup-components that you can use for all of these cases.
In a basic setup, the `<Popup />` component wraps the popup. `<PopupTitle />` let's you display a title inside your popup.
For any custom content in the popup, wrap it in the `<PopupContent />` component, and buttons inside
the `<PopupButtons />` component.

With `<PopupTabs />` you can add tabbed content inside the popup the same way you would use 
`<Tabs />` normally.

### Usage
```javascript
import { Popup, PopupTitle, PopupContent, PopupButtons } from "tv2-ui-react"
```

```jsx
<Popup>
    <PopupTitle>
        Default popup
    </PopupTitle>
    <PopupContent>
        <Paragraph>
            <Text base60>
                Filet mignon rump strip steak short loin burgdoggen venison beef
                jowl pork loin shoulder pork pig biltong ham hock.
            </Text>
        </Paragraph>
        <Form>
            <FormItem label="Type your name">
                <Input />
            </FormItem>
        </Form>
    </PopupContent>
    <PopupButtons>
        <Button kind="primary">
            Save changes
        </Button>
        <Button>
            Close
        </Button>
    </PopupButtons>
</Popup>
```

### Popup properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | *no* | null | Set the color theme on the popup. (success, error) |
| `visible` | bool | *no* | true | Indicates if the popup is visible or not. |

### PopupContent properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `scrollable` | bool | *no* | false | If content is long, set scrollable to scroll the content at a certain height. |
