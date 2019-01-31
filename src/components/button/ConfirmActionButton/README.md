# ConfirmActionButton

### Description
Use the `<ConfirmActionButton />` when you want to provide the option to delete something,
and also have the user confirm that they want to confirm the action.
It's compact size makes it fit snuggly in the bottom of a popup aswell.

### Usage
```jsx
<ConfirmActionButton
    label="Delete something"
    question="Are you sure you want to delete something?"
    onConfirm={() => console.log("DELETED!")}
/>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | string | *yes* | null | The label of the delete button. |
| `question` | string | *yes* | null | The question to ask the user to confirm the action. |
| `onConfirm` | func | *yes* | null | The callback when the user clicks "yes". |
