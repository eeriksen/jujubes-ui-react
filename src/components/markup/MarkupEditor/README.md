# MarkupEditor

### Description
Inline WYSIWYG editor.

### Usage
```jsx
<MarkupEditor
    value={htmlContent}
    onChange={(content) => setHtmlContent(content)}
    placeholder="Start typing here..."
    display={<MarkupDisplay />}
/>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | string | *yes* | null | The HTML content as a string. |
| `onChange` | func | *no* | null | Callback function when the content is changed. |
| `placeholder` | string | *yes* | null | The message displayed when no content. |
| `display` | React element | *no* | MarkupDisplay | A react element that styles the markup. |
| `actions` | array | *yes* | [["H1", "H2", "H3", "H4"], ["bold", "italic", "underline", "strikethrough"], ["align-left", "align-center", "align-right"], ["blockquote", "unordered-list", "ordered-list", "link"]] | Defines the actions available on the toolbar. |
| `excludeActions` | array | *yes* | array | Set toolbar actions to exclude. |
