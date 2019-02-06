# DataTable

### Description
The `<DataTable />` can be used to display data, static or dynamic, in a table.
Each table consist of multiple `<Column />` components. The `<Column />` takes a "cell"-property
that should return a function returning a `<Cell />` component. The function will receive one object containing
`row` which is the respective rows data and `rowIndex`. This way you can manipulate the table data on a cell 
basis if you need to.



### Usage
```javascript
import { DataTable } from "tv2-ui-react"
const { Column, Cell } = DataTable;
```

```jsx
<DataTable rows={tableRows}>
    <Column cell={({row}) => <Cell>{row.id}</Cell>}>
        ID
    </Column>
    <Column cell={({row}) => <Cell>{row.firstName}</Cell>}>
        First name
    </Column>
    <Column cell={({row}) => <Cell>{row.lastName}</Cell>}>
        Last name
    </Column>
    <Column cell={({row}) => <Cell><Link>{row.email}</Link></Cell>}>
        E-mail
    </Column>
    <Column cell={({row}) => (
        <Cell>
            {row.status ? (
                <Badge type="success">Active</Badge>
            ) : (
                <Badge type="error">Inactive</Badge>
            )}
        </Cell>
    )}>
        Status
    </Column>
</DataTable>
```

### DataTable properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `rows` | array | *no* | null | The rows to display in the table. |
| `onRowClick()` | func | *no* | null | Callback for when a row is clicked. |
| `busy` | bool | *no* | false | Show loading indicator on table. Great for when loading more rows. |
| `small` | bool | *no* | false | Show a smaller table. |
| `heading` | string | *no* | null | Table heading text. |
| `emptyCell` | object | *no* | null | What to render if the table is empty. |

### Column properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `cell` | func | *no* | null | Takes a function that should return a `<Cell />` component that renders that perticular cell. |
