# Textarea

### Description
Use the `<Textarea />` when users should input a longer text.

### Usage
```jsx
<Textarea value={val} onChange={(e) => this.setState({val: e.target.value})} />
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | string | *no* | null | The value of the textarea. |
| `rows` | number | *no* | 3 | Length of textarea in number of rows. |
| `onChange` | func | *no* | null | Triggered when text changes. |
| `placeholder` | string | *no* | null | The placeholder of the textarea. |
| `disabled` | bool | *no* | false | Should the textarea be disabled. |
| `error` | bool | *no* | false | Display an erroneous textarea. |
| `maxLength` | number | *no* | 255 | Maximum number of characters allowed. |
| `className` | string | *no* | null | Append class name to textarea component. |
