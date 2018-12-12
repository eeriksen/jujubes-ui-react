# SubmitButton

### Description
A `<SubmitButton />` is used at the bottom of `<Form />`-elements to submit a form
with it's data. The component is basically a `<Button />`, but can trigger a submit on a form
and display a loading indicator.

### Usage
```jsx
<Form onSubmit={this._submitMyForm}>
    {/* ... form items */}
    
    <FormButtons>
        <SubmitButton busy={busySubmittingForm}>
            Submit form
        </SubmitButton>
    </FormButtons>
</Form>

```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `busy` | bool | *no* | false | When true, will disable click and show a loading indicator. |

*Inherits all properties from `<Button />`*
