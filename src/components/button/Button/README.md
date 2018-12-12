# Button


### Usage
```jsx
<Button kind="primary" onClick={() => console.log("CLICKED")}>
    Primary button
</Button>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `onClick` | func | *no* | null | Click callback. |
| `link` | string | *no* | null | A react router link to navigate to. Should not be used in combination with onClick. |
| `kind` | string | *no* | null | What kind of color theme the button should have. Can be one of the following: __contrast, primary, info, success, warning, error, silentError __  |
| `size` | string | *no* | null | Size of buttton. Can be either __small__ or __big__.  |
| `compact` | boolean | *no* | false | Reduces the padding on the button. |
| `block` | boolean | *no* | false | Fill the parents width. |
| `circle` | boolean | *no* | false | Circle button. Should be used with an icon. |
| `square` | boolean | *no* | false | Makes button squared. Should be used with an icon. |
| `icon` | string | *no* | null | Display button with an icon. Takes an icon name. |
| `iconColor` | string | *no* | null | Give the button icon a color. __primary__, __info__, __success__ or __error__. |
| `iconRight` | boolean | *no* | false | Put the icon on the right side of the button label. |
| `hideIcon` | boolean | *no* | false | Hide the icon button if any. |

