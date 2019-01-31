# OnOffSwitch

### Description
The `<OnOffSwitch />` should be used when you have an option flag that does something important and
perhaps is not part of a regular form, where you probably would use a `<Checkbox />` instead.

### Usage
```jsx
<OnOffSwitch active={active} onChange={(val) => this.setState({active: !val})}>
    Turn me on or off
</OnOffSwitch>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `active` | bool | *yes* | null | The value of the switch. |
| `onChange` | func | *no* | null | Callback function when switch is toggled. Returns the current value. |

