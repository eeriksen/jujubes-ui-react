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
import FileSelectButton from "../../src/components/button/FileSelectButton/index"
import ConfirmActionButton from "../../src/components/button/ConfirmActionButton"

import ButtonReadme from "../../src/components/button/Button/README.md"
import ClickableReadme from "../../src/components/button/Clickable/README.md"
import FileSelectButtonReadme from "../../src/components/button/FileSelectButton/README.md"
import ButtonGroupReadme from "../../src/components/button/ButtonGroup/README.md"
import ConfirmActionButtonReadme from "../../src/components/button/ConfirmActionButton/README.md"


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
            <Button size="small">Small button</Button><br /><br />
            <Button>Regular button</Button><br /><br />
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
            <Button icon="check">Button with default icon</Button><br /><br />
            <Button iconColor="info" icon="eye">Button with info icon</Button><br /><br />
            <Button iconColor="success" icon="plus">Button with success icon</Button><br /><br />
            <Button iconColor="error" icon="trash">Button with error icon</Button>
        </div>
    ))
    .add('variants', () => (
        <div>
            <Button active>Active button</Button><br /><br />
            <Button compact>Compact button</Button><br /><br />
            <Button block>Block button</Button><br /><br />
            <Button circle icon="gear" /><br /><br />
            <Button square icon="gear" /> <Button square icon="gear" size="small" /> <Button square icon="gear" size="small" color="primary" />
        </div>
    ))
    .add('submit/busy', withState({
        busySubmittingForm: false
    }, (store) => (
        <Button
            type="submit"
            busy={store.state.busySubmittingForm}
            onClick={() => {
                store.set({busySubmittingForm: true});
                setTimeout(() => {
                    store.set({busySubmittingForm: false});
                }, 2000);
            }}>
            Submit this form
        </Button>
    )));


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
    ))
    .add('active', withState({
        active: 1
    }, (store) => (
        <ButtonGroup>
            <Button active={store.state.active === 1} onClick={() => store.set({active: 1})}>Left</Button>
            <Button active={store.state.active === 2} onClick={() => store.set({active: 2})}>Middle</Button>
            <Button active={store.state.active === 3} onClick={() => store.set({active: 3})}>Right</Button>
        </ButtonGroup>
    )));


/**
 * CONFIRM ACTION BUTTON
 */
storiesOf(`${SECTION_TITLE}/ConfirmActionButton`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ConfirmActionButtonReadme))
    .add('regular', () => (
        <ConfirmActionButton
            label="Delete something"
            question="Are you sure you want to delete something?"
            onConfirm={() => console.log("DELETED!")}
        />
    ))
    .add('small', () => (
        <ConfirmActionButton
            size="small"
            label="Delete something"
            question="Are you sure you want to delete something?"
            onConfirm={() => console.log("DELETED!")}
        />
    ));
