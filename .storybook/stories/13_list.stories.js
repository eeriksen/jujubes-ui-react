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

import ItemListReadme from "../../src/components/list/ItemList/README.md"


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
const PROFILE_PICTURE = "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/44859415_10161122646425644_5424185099438522368_n.jpg?_nc_cat=103&_nc_ht=scontent.fosl3-2.fna&oh=98cf4f4abd65962c199c32e62b8d6716&oe=5CF50070";


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
