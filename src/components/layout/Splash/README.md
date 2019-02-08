# Splash

### Description
The `<Splash />` is used for login forms and other messages/forms that should take
all the focus of the user. It's typically used for on-boarding pages where the user has 
a limited set of choices.

### Usage
```javascript
import { Splash, SplashTitle, SplashContent } from "tv2-ui-react"
```

```jsx
<Splash name="Application name">
    <SplashTitle title="Sign in" description="Sign in with your company email and password." />
    <SplashContent>
        <Form spacing="small">
            <FormItem>
                <Input big icon="user" placeholder="Your email" />
            </FormItem>
            <FormItem>
                <Input big icon="lock" type="password" placeholder="Your password" />
            </FormItem>
            <FormButtons>
                <SubmitButton kind="primary" size="big" block>
                    Sign in
                </SubmitButton>
            </FormButtons>
        </Form>
    </SplashContent>
</Splash>
```


### Splash properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | string | *no* | null | The name of the application. |

### SplashTitle properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `title` | string | *no* | null | A splash box title. |
| `description` | string | *no* | null | A splash box description. |
