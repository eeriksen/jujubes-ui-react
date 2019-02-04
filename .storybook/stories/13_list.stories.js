import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import { ItemList, Item } from "../../src/components/list/ItemList"
import Text from "../../src/components/typography/Text"
import Badge from "../../src/components/notify/Badge"
import Image from "../../src/components/media/Image"
import KeyValueList from "../../src/components/list/KeyValueList"
import Checklist from "../../src/components/list/Checklist"

import ItemListReadme from "../../src/components/list/ItemList/README.md"
import KeyValueListReadme from "../../src/components/list/KeyValueList/README.md"
import ChecklistReadme from "../../src/components/list/Checklist/README.md"


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
const SECTION_TITLE = "13 - List";


/**
 * ITEM LIST
 */
storiesOf(`${SECTION_TITLE}/ItemList`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ItemListReadme))
    .add('default', () => (
        <ItemList>
            <Item>
                <Text block>This is the first item</Text>
            </Item>
            <Item>
                <Text block>This is the second item</Text>
            </Item>
            <Item>
                <Text block>This is the third item</Text>
            </Item>
            <Item>
                <Text block>This is the fourth item</Text>
            </Item>
            <Item>
                <Text block>This is the fifth item</Text>
            </Item>
        </ItemList>
    ))
    .add('busy', () => (
        <ItemList busy>
            <Item>
                <Text block>This is the first item</Text>
            </Item>
            <Item>
                <Text block>This is the second item</Text>
            </Item>
            <Item>
                <Text block>This is the third item</Text>
            </Item>
            <Item>
                <Text block>This is the fourth item</Text>
            </Item>
            <Item>
                <Text block>This is the fifth item</Text>
            </Item>
        </ItemList>
    ))
    .add('append/prepend/sort', () => (
        <ItemList onItemClick={action('item click')} onSort={action('move item')}>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/5bd0c2e990ea376266cc61b0/master/w_820,c_limit/Oslo_Norway_GettyImages-604226935.jpg" />}
                append={<Badge fill color="success">1. place</Badge>}
            >
                <Text block>Oslo</Text>
                <Text block size="small" color="base60">Norway</Text>
            </Item>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/5bd0c2eaa480f70a5952c26a/master/w_820,c_limit/San-Sebastian_Spain_GettyImages-543785468.jpg" />}
                append={<Badge fill color="silent">2. place</Badge>}
            >
                <Text block>San Sebastián</Text>
                <Text block size="small" color="base60">Spain</Text>
            </Item>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/57f6b46e44b4743b6f94de5d/master/w_820,c_limit/lisbon-GettyImages-472159990.jpg" />}
                append={<Badge fill color="silent">3. place</Badge>}
            >
                <Text block>Lisbon</Text>
                <Text block size="small" color="base60">Portugal</Text>
            </Item>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/581a03426928748a1e19f066/master/w_820,c_limit/copenhagen-denmark-GettyImages-466666680.jpg" />}
                append={<Badge fill color="silent">4. place</Badge>}
            >
                <Text block>Copenhagen</Text>
                <Text block size="small" color="base60">Denmark</Text>
            </Item>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/5bd0c2e906957f77f6612273/master/w_820,c_limit/Cork_GettyImages-513838533.jpg" />}
                append={<Badge fill color="silent">5. place</Badge>}
            >
                <Text block>Cork</Text>
                <Text block size="small" color="base60">Ireland</Text>
            </Item>
            <Item
                prepend={<Image thumbnail="regular" src="https://media.cntraveler.com/photos/5bd0cb9990ea376266cc61b6/master/w_820,c_limit/Rome_GettyImages-492161529.jpg" />}
                append={<Badge fill color="silent">6. place</Badge>}
            >
                <Text block>Rome</Text>
                <Text block size="small" color="base60">Italy</Text>
            </Item>
        </ItemList>
    ));



/**
 * KEY VALUE LIST
 */
storiesOf(`${SECTION_TITLE}/KeyValueList`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(KeyValueListReadme))
    .add('default', () => (
        <KeyValueList>
            <KeyValueList.Item label="First label">
                First value
            </KeyValueList.Item>
            <KeyValueList.Item label="Second label">
                Second value
            </KeyValueList.Item>
            <KeyValueList.Item label="Third label">
                Third value
            </KeyValueList.Item>
            <KeyValueList.Item label="Fourth label">
                Fourth value
            </KeyValueList.Item>
        </KeyValueList>
    ))
    .add('fluid', () => (
        <KeyValueList fluid>
            <KeyValueList.Item label="First label">
                First value
            </KeyValueList.Item>
            <KeyValueList.Item label="Second label">
                Second value
            </KeyValueList.Item>
            <KeyValueList.Item label="Third label">
                Third value
            </KeyValueList.Item>
            <KeyValueList.Item label="Fourth label">
                Fourth value
            </KeyValueList.Item>
        </KeyValueList>
    ))
    .add('horizontal', () => (
        <KeyValueList horizontal>
            <KeyValueList.Item label="Men">
                <Text size="large">456</Text>
            </KeyValueList.Item>
            <KeyValueList.Item label="Women">
                <Text size="large">873</Text>
            </KeyValueList.Item>
            <KeyValueList.Item label="Total">
                <Text size="large">456</Text>
            </KeyValueList.Item>
            <KeyValueList.Item label="Churn">
                <Text size="large">6.5%</Text>
            </KeyValueList.Item>
        </KeyValueList>
    ));



/**
 * CHECKLIST
 */
storiesOf(`${SECTION_TITLE}/Checklist`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ChecklistReadme))
    .add('default', withState({
        first: true,
        second: false,
        third: false,
        fourth: false
    }, (store) => (
        <Checklist onItemToggle={(item) => store.set({[item]: !store.state[item]})}>
            <Checklist.Item value={"first"} checked={store.state.first}>
                First checklist item
            </Checklist.Item>
            <Checklist.Item value={"second"} checked={store.state.second}>
                Second checklist item
            </Checklist.Item>
            <Checklist.Item value={"third"} checked={store.state.third}>
                Third checklist item
            </Checklist.Item>
            <Checklist.Item value={"fourth"} checked={store.state.fourth}>
                Fourth checklist item
            </Checklist.Item>
        </Checklist>
    )))
    .add('busy', () => (
        <Checklist busy>
            <Checklist.Item>
                First checklist item
            </Checklist.Item>
            <Checklist.Item>
                Second checklist item
            </Checklist.Item>
            <Checklist.Item>
                Third checklist item
            </Checklist.Item>
            <Checklist.Item>
                Fourth checklist item
            </Checklist.Item>
        </Checklist>
    ));
