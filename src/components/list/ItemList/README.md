# ItemList

### Description
Use the `<ItemList />` to list simple items where the order of the items is key.
With the item list you can sort items and display a simple thumbnail, title, description.


### Usage
```javascript
import { ItemList } from "tv2-ui-react"
const { Item } = ItemList;
```

```jsx
<ItemList onItemClick={(item) => console.log("ITEM CLICKED", item)}>
    <Item
        value={"first"}
        title="First item here"
        description={<Text small base60>This is a short item description</Text>}
        image={<Image size="fill" />}
        action={<Badge fill type="success">Active</Badge>}
    />
    <Item
        value={"second"}
        title="Second item here"
        description={<Text small base60>This is a short item description</Text>}
        image={<Image size="fill" />}
        action={<Badge fill type="success">Active</Badge>}
    />
    <Item
        value={"third"}
        title="Third item here"
        description={<Text small base60>This is a short item description</Text>}
        image={<Image size="fill" />}
        action={<Badge fill type="error">Inactive</Badge>}
    />
    <Item
        value={"fourth"}
        title="Fourth item here"
        description={<Text small base60>This is a short item description</Text>}
        image={<Image size="fill" />}
        action={<Badge fill type="success">Active</Badge>}
    />
    <Item
        value={"fifth"}
        title="Fifth item here"
        description={<Text small base60>This is a short item description</Text>}
        image={<Image size="fill" />}
        action={<Badge fill type="error">Inactive</Badge>}
    />
</ItemList>
```

### ItemList properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `onItemClick()` | func | *no* | null | Item click callback. Takes a function, which receives the item value when item is clicked. |
| `onSort()` | func | *no* | null | Callback triggered when an item is moved. |

### ItemList.Item properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | object | *no* | null | The value of the item to passed when clicked. |
| `title` | object | *no* | null | The title of the item. Can be an object, i.e. a `<Text />` component. |
| `description` | object | *no* | null | The description of the item. Can be an object, i.e. a `<Text />` component. |
| `image` | object | *no* | null | Display an image by passing an `<Image />` component. |
| `action` | object | *no* | null | Can be whatever, such as a status badge or a delete button. |
