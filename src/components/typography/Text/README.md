# Text

### Description
Use `<Text />` to wrap text that should have static formatting other than the default.

### Usage
```jsx
<Text>Here is some regular text</Text>
<Text semiBold>Here is some semi-bold text</Text>
<Text success>Here is some text colored with success</Text>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `block` | bool | *no* | false | Display text as block instead of span. |
| `truncate` | bool | *no* | false | Don't wrap text and display ... if text overflows. |
| `semiBold` | bool | *no* | false | Semi-bold text. |
| `small` | bool | *no* | false | Small text. |
| `normal` | bool | *no* | false | Normal text. (default) |
| `medium` | bool | *no* | false | Medium sizes text. |
| `large` | bool | *no* | false | Large text. |
| `xLarge` | bool | *no* | false | Extra large text. |
| `base80` | bool | *no* | false | Text with base color at 80%. |
| `base60` | bool | *no* | false | Text with base color at 60%. |
| `base40` | bool | *no* | false | Text with base color at 40%. |
| `success` | bool | *no* | false | Text with success color. |
| `warning` | bool | *no* | false | Text with warning color. |
| `error` | bool | *no* | false | Text with error color. |
| `primary` | bool | *no* | false | Text with primary color. |
| `info` | bool | *no* | false | Text with info color. |
| `strikeThrough` | bool | *no* | false | Strike through text. |
| `lowercase` | bool | *no* | false | Lowercase text. |
