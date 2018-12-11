# Grid

### Description
This grid is used when you want to utilize the size of a desktop sized screen, but needs to break
that same content on mobile devices. The grid is a flexible 24-unit system where you can define sizes and offsets
of content blocks that can break into separate rows on three different breakpoints, small (sm), medium (md) and large (lg).

### Usage
```jsx
<Row>
    <Col md={6} sm={12} />
    <Col md={6} sm={12} />
    <Col md={6} sm={12} />
    <Col md={6} sm={12} />
</Row>
```

### Row properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `bottomSpacing` | bool | *no* | null | Add spacing to the bottom of the row. |
| `colSpacing` | bool | *no* | null | Add spacing to the bottom of each column when they break to separate rows. |
| `className` | string | *no* | null | Add class to row. |

### Column properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `span` | number | *no* | null | Span units of given column. |
| `offset` | number | *no* | null | Left offset units of given column. |
| `push` | number | *no* | null | Push the column number of units to the right. |
| `pull` | number | *no* | null | Pull the column number of units to the left. |
| `sm` | object | *no* | null | Define span and offset for small screens. |
| `md` | object | *no* | null | Define span and offset for medium screens. |
| `lg` | object | *no* | null | Define span and offset for large screens. |
| `className` | string | *no* | null | Add class name to the column. |
| `bottomSpacing` | bool | *no* | false | Add bottom spacing to column. |
| `alignRight` | bool | *no* | false | Align column content to the right. |
| `alignCenter` | bool | *no* | false | Align column content to center. |
