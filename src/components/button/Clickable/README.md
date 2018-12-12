# Clickable

### Description
This component should be used as a wrapper whenever you are creating a custom clickable component.
This way we can bind events to all "clickable" components in one place, if say we would like to 
add haptic feedback (vibration) on all click events on mobile.

### Usage
```jsx
<Clickable>
    Some clickable content
</Clickable>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `link` | string | *no* | null | Navigate to react-router link on click. |
| `href` | string | *no* | null | Navigate to a url on click. |
| `onClick` | func | *no* | null | Click callback function. |
| `target` | string | *no* | null | Link target value. Ex. "_blank" |
| `activeClassName` | string | *no* | null | The class name for when the clickable is a link, and is active. |
| `className` | string | *no* | null | Element class name. |
