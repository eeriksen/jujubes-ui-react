# Checkbox

### Usage
```jsx
<Checkbox checked={value} onToggle={(val) => this.setState({value: !val})}>
    This is a checkbox
</Checkbox>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `checked` | bool | *yes* | false | The value of the checkbox. |
| `onToggle` | func | *no* | null | Callback when checkbox is clicked. |

