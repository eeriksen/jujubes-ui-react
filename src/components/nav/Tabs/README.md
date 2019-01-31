# Tabs

### Description
Use `<Tabs />` when you want to section content, but want to keep on the same page.

### Usage
```jsx
<Tabs activeKey={activeKey} onChange={(key) => this.setState({activeKey: key})}>
    <TabPane key={1} label="First">
        First tab pane
    </TabPane>
    <TabPane key={2} label="Second">
        Second tab pane
    </TabPane>
    <TabPane key={3} label="Third">
        Third tab pane
    </TabPane>
</Tabs>
```

### Tabs properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `activeKey` | number | *yes* | null | The key of the active tab. |
| `onChange` | func | *yes* | null | Function callback when tabs are clicked. |

### Tab pane properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `key` | number | *yes* | null |The tabs key. |
| `label` | string | *yes* | null | The tabs label.  |
| `icon` | string | *no* | null | Show an icon next to the label.  |
