import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'

import { Page } from "../../src/components/page/Page"
import { Card } from "../../src/components/card/Card"
import { CardContent } from "../../src/components/card/CardContent"
import { DataTable, Column, Cell } from "../../src/components/table/DataTable"
import { Badge } from "../../src/components/notify/Badge"

import DataTableReadme from "../../src/components/table/DataTable/README.md"


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
const SECTION_TITLE = "14 - Table";


const tableRows = [{
    id: 1,
    firstName: "Otto",
    lastName: "Berman",
    email: "otto@berman.com",
    status: true
}, {
    id: 1,
    firstName: "Artichoke",
    lastName: "King",
    email: "artie@king.com",
    status: true
}, {
    id: 1,
    firstName: "Agostino",
    lastName: "Camancho",
    email: "ago@camancho.com",
    status: false
}, {
    id: 1,
    firstName: "Baldassare",
    lastName: "Amato",
    email: "baldy@amato.com",
    status: false
}, {
    id: 1,
    firstName: "Albert",
    lastName: "Barone",
    email: "albie@barone.com",
    status: true
}, {
    id: 1,
    firstName: "Paul",
    lastName: "Castellano",
    email: "paul@castellano.com",
    status: false
}];


/**
 * DATA TABLE
 */
storiesOf(`${SECTION_TITLE}/DataTable`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(DataTableReadme))
    .add('default', () => (
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
            <Column cell={({row}) => <Cell>{row.email}</Cell>}>
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
    ))
    .add('with loader', () => (
        <DataTable rows={tableRows} busy={true}>
            <Column cell={({row}) => <Cell>{row.id}</Cell>}>
                ID
            </Column>
            <Column cell={({row}) => <Cell>{row.firstName}</Cell>}>
                First name
            </Column>
            <Column cell={({row}) => <Cell>{row.lastName}</Cell>}>
                Last name
            </Column>
            <Column cell={({row}) => <Cell>{row.email}</Cell>}>
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
    ))
    .add('with clickable rows', () => (
        <DataTable rows={tableRows} onRowClick={action('row clicked')}>
            <Column cell={({row}) => <Cell>{row.id}</Cell>}>
                ID
            </Column>
            <Column cell={({row}) => <Cell>{row.firstName}</Cell>}>
                First name
            </Column>
            <Column cell={({row}) => <Cell>{row.lastName}</Cell>}>
                Last name
            </Column>
            <Column cell={({row}) => <Cell>{row.email}</Cell>}>
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
    ))
    .add('with heading', () => (
        <DataTable rows={tableRows} heading="This is the table heading">
            <Column cell={({row}) => <Cell>{row.id}</Cell>}>
                ID
            </Column>
            <Column cell={({row}) => <Cell>{row.firstName}</Cell>}>
                First name
            </Column>
            <Column cell={({row}) => <Cell>{row.lastName}</Cell>}>
                Last name
            </Column>
            <Column cell={({row}) => <Cell>{row.email}</Cell>}>
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
    ));


