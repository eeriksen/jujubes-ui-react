import React from "react"

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Form from "../../src/components/form/Form"
import FormItem from "../../src/components/form/FormItem"
import FormError from "../../src/components/form/FormError"
import Input from "../../src/components/form/Input"
import Textarea from "../../src/components/form/Textarea"
import Checkbox from "../../src/components/form/Checkbox"
import FormButtons from "../../src/components/form/FormButtons"
import Button from "../../src/components/button/Button"
import { Select, Option } from "../../src/components/form/Select"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Text from "../../src/components/typography/Text"
import OnOffSwitch from "../../src/components/form/OnOffSwitch"


import FormReadme from "../../src/components/form/Form/README.md"
import FormItemReadme from "../../src/components/form/FormItem/README.md"
import InputReadme from "../../src/components/form/Input/README.md"
import TextareaReadme from "../../src/components/form/Textarea/README.md"
import SelectReadme from "../../src/components/form/Select/README.md"
import OnOffSwitchReadme from "../../src/components/form/OnOffSwitch/README.md"



// Decorator
const pageDecorator = (story) => (
    <Page>
        <Card>
            <CardContent>
                {story()}
            </CardContent>
        </Card>
    </Page>
);


// Section title
const SECTION_TITLE = "06 - Form";



/**
 * FORM
 */
storiesOf(`${SECTION_TITLE}/Form`, module)
    .addDecorator(withReadme(FormReadme))
    .addDecorator(pageDecorator)
    .add('default', withState({
        name: null,
        comment: null,
        everyone: true
    }, (store) => (
        <Form onSubmit={action("SUBMIT")}>
            <FormItem label="Your name">
                <Input value={store.state.name} onChange={(e) => store.set({name: e.target.value})} placeholder="Write here..." />
            </FormItem>
            <FormItem label="Your comment">
                <Textarea value={store.state.comment} onChange={(e) => store.set({comment: e.target.value})} placeholder="Write here..." />
            </FormItem>
            <FormItem>
                <Checkbox checked={store.state.everyone} onChange={(val) => store.set({everyone: val})}>
                    Send to everyone
                </Checkbox>
            </FormItem>
            <FormButtons>
                <Button type="submit" color="primary">
                    Submit comment
                </Button>
                <Button onClick={() => store.set({name: null, comment: null, everyone: true})}>
                    Clear
                </Button>
            </FormButtons>
        </Form>
    )))
    .add('with info and error', withState({
        name: null,
        comment: null,
        everyone: true
    }, (store) => (
        <Form onSubmit={action("SUBMIT")}>
            <FormItem label="Your name" info="Fyll inn ditt fulle navn i feltet">
                <Input value={store.state.name} onChange={(e) => store.set({name: e.target.value})} placeholder="Write here..." />
            </FormItem>
            <FormItem label="Your comment" info="Skriv en liten kommentar til denne posten" error>
                <Textarea value={store.state.comment} onChange={(e) => store.set({comment: e.target.value})} placeholder="Write here..." />
            </FormItem>
            <FormItem info="Check this if you want to send this message to everyone in your network">
                <Checkbox checked={store.state.everyone} onToggle={(val) => store.set({everyone: !val})}>
                    Send to everyone
                </Checkbox>
            </FormItem>
            <FormError visible>
                There was an error posting your comment
            </FormError>
            <FormButtons>
                <Button type="submit" color="primary">
                    Submit comment
                </Button>
                <Button onClick={() => store.set({name: null, comment: null, everyone: true})}>
                    Clear
                </Button>
            </FormButtons>
        </Form>
    )));


/**
 * FORM ITEM
 */
storiesOf(`${SECTION_TITLE}/FormItem`, module)
    .addDecorator(withReadme(FormItemReadme))
    .addDecorator(pageDecorator)
    .add('with label', withState({
        textValue: null
    }, (store) => (
        <Form>
            <FormItem label="Your name">
                <Input
                    value={store.state.textValue}
                    onChange={(e) => store.set({textValue: e.target.value})}
                    placeholder="Write here..."
                />
            </FormItem>
        </Form>
    )))
    .add('with info', withState({
        textValue: null
    }, (store) => (
        <Form>
            <FormItem label="Your name" info="Type your full name in the input field">
                <Input
                    value={store.state.textValue}
                    onChange={(e) => store.set({textValue: e.target.value})}
                    placeholder="Write here..."
                />
            </FormItem>
        </Form>
    )))
    .add('with error', withState({
        textValue: null
    }, (store) => (
        <Form>
            <FormItem label="Your name" info="Type your full name in the input field" error>
                <Input
                    value={store.state.textValue}
                    onChange={(e) => store.set({textValue: e.target.value})}
                    placeholder="Write here..."
                />
            </FormItem>
        </Form>
    )));



/**
 * INPUT
 */
storiesOf(`${SECTION_TITLE}/Input`, module)
    .addDecorator(withReadme(InputReadme))
    .addDecorator(pageDecorator)
    .add('default', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input emphasize value={store.state.value} onChange={(e) => store.set({value: e.target.value})} placeholder="Default input" />
            </FormItem>
        </Form>
    )))
    .add('sizes', withState({
        smallValue: null,
        regularValue: null,
        bigValue: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input value={store.state.smallValue} onChange={(e) => store.set({smallValue: e.target.value})} small placeholder="Small input" />
            </FormItem>
            <FormItem>
                <Input value={store.state.regularValue} onChange={(e) => store.set({regularValue: e.target.value})} placeholder="Regular input" />
            </FormItem>
            <FormItem>
                <Input value={store.state.bigValue} onChange={(e) => store.set({bigValue: e.target.value})} big placeholder="Big input" />
            </FormItem>
        </Form>

    )))
    .add('with icon', withState({
        regularValue: null,
        bigValue: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input value={store.state.regularValue} onChange={(e) => store.set({regularValue: e.target.value})} placeholder="Regular input with icon" icon="user" />
            </FormItem>
            <FormItem>
                <Input value={store.state.bigValue} onChange={(e) => store.set({bigValue: e.target.value})} big placeholder="Big input with icon" icon="link" />
            </FormItem>
        </Form>
    )))
    .add('with prepend', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input
                    value={store.state.value}
                    onChange={(e) => store.set({value: e.target.value})}
                    placeholder="Input with prepend"
                    prepend={<Text color="base60">http://</Text>}
                />
            </FormItem>
        </Form>
    )))
    .add('with append', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input
                    value={store.state.value}
                    onChange={(e) => store.set({value: e.target.value})}
                    placeholder="Input with append"
                    append={<Text color="base60">.com</Text>}
                />
            </FormItem>
        </Form>
    )))
    .add('disabled', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Input value={store.state.value} onChange={(e) => store.set({value: e.target.value})} placeholder="Disabled input" disabled />
            </FormItem>
        </Form>
    )));


/**
 * TEXTAREA
 */
storiesOf(`${SECTION_TITLE}/Textarea`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(TextareaReadme))
    .add('default', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Textarea value={store.state.value} onChange={(e) => store.set({value: e.target.value})} placeholder="Default textarea" />
            </FormItem>
        </Form>
    )))
    .add('disabled', () => (
        <Form>
            <FormItem>
                <Textarea placeholder="Default textarea" disabled />
            </FormItem>
        </Form>
    ));



/**
 * SELECT
 */
storiesOf(`${SECTION_TITLE}/Select`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(SelectReadme))
    .add('sizes', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Select value={store.state.value} placeholder="Choose one" onChange={(val) => store.set({value: val})} small>
                    <Option value={0}>
                        First
                    </Option>
                    <Option value={1}>
                        Second
                    </Option>
                    <Option value={2}>
                        Third
                    </Option>
                    <Option value={3}>
                        Fourth
                    </Option>
                </Select>
            </FormItem>
            <FormItem>
                <Select value={store.state.value} placeholder="Choose one" onChange={(val) => store.set({value: val})}>
                    <Option value={0}>
                        First
                    </Option>
                    <Option value={1}>
                        Second
                    </Option>
                    <Option value={2}>
                        Third
                    </Option>
                    <Option value={3}>
                        Fourth
                    </Option>
                </Select>
            </FormItem>
        </Form>
    )))
    .add('disabled', withState({
        value: null
    }, (store) => (
        <Form>
            <FormItem>
                <Select value={store.state.value} placeholder="Disabled select" onChange={(val) => store.set({value: val})} disabled>
                    <Option value={0}>
                        First
                    </Option>
                    <Option value={1}>
                        Second
                    </Option>
                    <Option value={2}>
                        Third
                    </Option>
                    <Option value={3}>
                        Fourth
                    </Option>
                </Select>
            </FormItem>
        </Form>
    )));


/**
 * ON/OFF SWITCH
 */
storiesOf(`${SECTION_TITLE}/OnOffSwitch`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(OnOffSwitchReadme))
    .add('default', withState({
        active: true
    }, (store) => (
        <Form>
            <FormItem>
                <OnOffSwitch value={store.state.active} onChange={(val) => store.set({active: !val})}>
                    Switch
                </OnOffSwitch>
            </FormItem>
            <FormItem>
                <OnOffSwitch disabled>
                    Switch (disabled)
                </OnOffSwitch>
            </FormItem>
        </Form>
    )));
