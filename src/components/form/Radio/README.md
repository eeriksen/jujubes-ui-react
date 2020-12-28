# RadioGroup

### Description
Use multiple `<Radio />` components inside a `<RadioGroup />` when you have 2-4 fairly short choices that the user can select from.

### Usage
```jsx
<RadioGroup value={value} onChange={(val) => this.setState({value: val}))}>
    <Radio value={1}>
        First
    </Radio>
    <Radio value={2}>
        Second
    </Radio>
    <Radio value={3}>
        Third
    </Radio>
</RadioGroup>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | object | *yes* | null | The value of the radio group. |
| `onChange` | func | *no* | null | Callback function when a radio option is chosen. Returns the radio options value. |

