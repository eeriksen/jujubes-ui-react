# KeyValueList

### Description
Use the `<KeyValueList />` when you want to display a simple list of labels and fairly short values.
Example of a use case can be listing author name and created date at the bottom of a document.


### Usage
```javascript
import { KeyValueList } from "tv2-ui-react"
const { Item } = KeyValueList;
```

```jsx
<KeyValueList>
    <Item label="First label">
        First value
    </Item>
    <Item label="Second label">
        Second value
    </Item>
    <Item label="Third label">
        Third value
    </Item>
    <Item label="Fourth label">
        Fourth value
    </Item>
</KeyValueList>
```

### KeyValueList properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `silent` | bool | *no* | false | A simpler look of the list. |

### KeyValueList.Item properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | string | *no* | null | Label of item. |
