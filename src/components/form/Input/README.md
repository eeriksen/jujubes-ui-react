# Input

### Description
The `<Input />` component is a very flexible text input component.

### Usage
```jsx
<Input value={val} onChange={(e) => this.setState({val: e.target.value})} />
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | string | *no* | null | The value of the input field. |
| `type` | string | *no* | text | The type of the input. |
| `onChange` | func | *no* | null | Triggered when changing text in input. |
| `onClick` | func | *no* | null | Click callback. |
| `big` | bool | *no* | false | Should display big input field. |
| `placeholder` | string | *no* | null | The placeholder of the input field. |
| `disabled` | bool | *no* | false | Should the input field be disabled. |
| `error` | bool | *no* | false | Display an erroneous input field. |
| `icon` | string | *no* | null | Prepend with icon. Takes the name of an icon. |
| `maxLength` | number | *no* | 255 | Maximum number of characters allowed. |
| `max` | number | *no* | null | Max value allowed in case of type=number. |
| `min` | number | *no* | null | Min value allowed in case of type=number. |
| `step` | number | *no* | null | The size of one step in case of type=number. |
| `prepend` | object | *no* | null | Prepend the input with the given content. |
| `append` | object | *no* | null | Append the input with the given content. |
| `className` | string | *no* | null | Append class name to input component. |
| `inputClassName` | string | *no* | null | Class name put directly on the input element. |
