# FormItem

### Description
The `<FormItem />` represents one input element in a form.
An form component should __always__ be wrapped in a `<FormItem />` component.

### Usage
```jsx
<FormItem label="Your name">
    <Input
        value={textValue}
        onChange={(e) => this.setState({textValue: e.target.value})}
        placeholder="Write here..."
    />
</FormItem>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | string | *no* | null | Form item label. |
| `info` | string | *no* | null | Show info text on the form item. |
| `error` | bool | *no* | false | Display an error on the current form item. |

