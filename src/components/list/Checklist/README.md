# Checklist

### Description
Use the `<Checklist />` when you want to display a nice vertical list of choices to be selected from.



### Usage
```javascript
import { Checklist } from "tv2-ui-react"
const { Item } = Checklist;
```

```jsx
<Checklist onItemToggle={(item) => console.log("ITEM TOGGLE", item)}>
    <Item value={"first"} checked={first}>
        First checklist item
    </Item>
    <Item value={"second"} checked={second}>
        Second checklist item
    </Item>
    <Item value={"third"} checked={third}>
        Third checklist item
    </Item>
    <Item value={"fourth"} checked={fourth}>
        Fourth checklist item
    </Item>
</Checklist>
```

### Checklist properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `onItemToggle` | func | *no* | null | Callback triggered when an item is toggled. Parameter is the value of the respective toggled item. |

### Checklist.Item properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | object | *no* | null | The value of the given checklist item that should be passed to the toggle function when toggled. |
| `checked` | bool | *no* | null | Indicates if the item is checked or not. |

