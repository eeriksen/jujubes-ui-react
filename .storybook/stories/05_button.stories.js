import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page/index"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Button from "../../src/components/button/Button"
import ButtonGroup from "../../src/components/button/ButtonGroup"
import Clickable from "../../src/components/button/Clickable"
import SubmitButton from "../../src/components/button/SubmitButton/SubmitButton"
import FileSelectButton from "../../src/components/button/FileSelectButton/index"

import ButtonReadme from "../../src/components/button/Button/README.md"
import ClickableReadme from "../../src/components/button/Clickable/README.md"
import SubmitButtonReadme from "../../src/components/button/SubmitButton/README.md"
import FileSelectButtonReadme from "../../src/components/button/FileSelectButton/README.md"
import ButtonGroupReadme from "../../src/components/button/ButtonGroup/README.md"


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
const SECTION_TITLE = "05 - Button";

/**
 * BUTTON
 */
storiesOf(`${SECTION_TITLE}/Button`, module)
    .addDecorator(withReadme(ButtonReadme))
    .addDecorator(pageDecorator)

    .add('types', () => (
        <div>
            <Button>Regular button</Button><br /><br />
            <Button color="primary">Primary button</Button><br /><br />
            <Button color="success">Success button</Button><br /><br />
            <Button color="error">Error button</Button>
        </div>
    ))
    .add('sizes', () => (
        <div>
            <Button size="small">Small button</Button>
            <Button>Regular button</Button>
            <Button size="big">Big button</Button>
        </div>
    ))
    .add('with icon', () => (
        <Button icon="gear">Button with icon</Button>
    ))
    .add('with right icon', () => (
        <Button icon="eye" iconRight>Button with right icon</Button>
    ))
    .add('with icon colors', () => (
        <div>
            <Button iconColor="primary" icon="check">Button with primary icon</Button>
            <Button iconColor="info" icon="eye">Button with info icon</Button>
            <Button iconColor="success" icon="plus-small">Button with success icon</Button>
            <Button iconColor="error" icon="trash">Button with error icon</Button>
        </div>
    ))
    .add('variants', () => (
        <div>
            <Button active>Active button</Button>
            <Button compact>Compact button</Button>
            <Button block>Block button</Button>
            <Button circle icon="gear" />
            <Button square icon="gear" />
        </div>
    ));


/**
 * CLICKABLE
 */
storiesOf(`${SECTION_TITLE}/Clickable`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ClickableReadme))
    .add('regular', () => (
        <Clickable onClick={action('Clicked!')}>Some clickable content</Clickable>
    ));


/**
 * SUBMIT BUTTON
 */
storiesOf(`${SECTION_TITLE}/SubmitButton`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(SubmitButtonReadme))
    .add('regular', withState({
        busySubmittingForm: false
    }, (store) => (
        <SubmitButton
            busy={store.state.busySubmittingForm}
            onClick={() => {
                store.set({busySubmittingForm: true});
                setTimeout(() => {
                    store.set({busySubmittingForm: false});
                }, 2000);
            }}>
            Submit this form
        </SubmitButton>
    )));


/**
 * FILE SELECT BUTTON
 */
storiesOf(`${SECTION_TITLE}/FileSelectButton`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(FileSelectButtonReadme))
    .add('regular', withState({
        busyUploading: false
    }, (store) => (
        <FileSelectButton
            icon="upload"
            iconColor="primary"
            busy={store.state.busyUploading}
            onSelect={() => {
                store.set({busyUploading: true});
                setTimeout(() => {
                    store.set({busyUploading: false});
                }, 2000);
            }}
        >
            Upload a file
        </FileSelectButton>
    )));


/**
 * BUTTON GROUP
 */
storiesOf(`${SECTION_TITLE}/ButtonGroup`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ButtonGroupReadme))
    .add('regular', () => (
        <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
    ));
