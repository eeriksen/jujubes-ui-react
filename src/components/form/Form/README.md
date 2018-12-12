# Form

### Description
Every form should be wrapped in the `<Form />` component.
A form consists of one or more `<FormItem />` components and a `<FormButtons />`
at the bottom of the form which contains the action buttons.

### Usage
```jsx
<Form onSubmit={this.handleSubmit}>
    <FormItem label="Your name" info="Fyll inn ditt fulle navn i feltet">
        <Input value={name} onChange={(e) => this.setState({name: e.target.value})} placeholder="Write here..." />
    </FormItem>
    <FormItem label="Your comment" info="Skriv en liten kommentar til denne posten" error>
        <Textarea value={comment} onChange={(e) => this.setState({comment: e.target.value})} placeholder="Your comment" />
    </FormItem>
    <FormItem>
        <Checkbox checked={checked} onToggle={() => this.setState({checked: !checked})}>
            Send to everyone
        </Checkbox>
    </FormItem>
    <FormError visible={showFormError}>
        There was an error posting your comment
    </FormError>
    <FormButtons>
        <SubmitButton kind="primary" busy={busySubmittingForm}>
            Submit comment
        </SubmitButton>
        <Button onClick={this.clearForm}>
            Clear
        </Button>
    </FormButtons>
</Form>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `onSubmit` | func | *no* | null | Function that should be called when form submits. |
| `spacing` | string | *no* | null | Spacing between form items. ("small")} |

