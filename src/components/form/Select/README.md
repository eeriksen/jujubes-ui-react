# Select

### Description
Use the `<Select />` when the user should choose from a list of alternatives.

### Usage
```jsx
<Select placeholder="Choose one" value={value} onChange={(val) => this.setState({value: val})}>
    <Option value={0}>
        First
    </Option>
    <Option value={1}>
        Second
    </Option>
    <Option value={2}>
        Third
    </Option>
    <Option value={3}>
        Fourth
    </Option>
</Select>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | string | *no* | null | The value of the input field. |
| `onChange` | func | *no* | null | Triggered when another value is selected. |
| `placeholder` | string | *no* | null | The placeholder of the select field. |
| `big` | bool | *no* | false | Display big select component. |
| `disabled` | bool | *no* | false | Should the select be disabled. |
| `error` | bool | *no* | false | Display an erroneous selector. |
| `className` | string | *no* | null | Append class name to select component. |
| `selectClassName` | string | *no* | null | Append class name to select-element. |
