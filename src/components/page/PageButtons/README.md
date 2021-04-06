# PageButtons

### Description
The `<PageButtons />` renders big navigational buttons at the top of a page.
Use these buttons to split up content into different pages within a context.
These should only be placed on the top of the page, just below the `<PageHeader />`.

### Usage
```jsx
<PageButtons>
    <PageButton
        icon="edit"
        label="Details"
        link="/details"
    />
    <PageButton
        icon="devices"
        label="Devices"
        count={29}
        link="/devices"
    />
    <PageButton
        icon="palette"
        label="Theme"
        link="/theme"
    />
</PageButtons>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | string | *yes* | null | The text label of the button. |
| `icon` | string | *no* | null | The name of an icon to display. |
| `count` | string | *no* | null | Display a counter on the button. |
| `link` | function | *no* | null | The link this button should navigate to. |
| `onClick` | function | *no* | null | Click handler. |
| `active` | boolean | *no* | false | Define manually if button should show as active or not. Used in conjunction with onClick. |


