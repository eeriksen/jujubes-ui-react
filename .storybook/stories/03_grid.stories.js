import React from 'react';

import { storiesOf } from '@storybook/react'
// import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"


// Section title
const SECTION_TITLE = "03 - Grid";

// Decorator
const pageDecorator = (story) => (
    <Page>
        {story()}
    </Page>
);

/**
 * AUTH
 */
storiesOf(`${SECTION_TITLE}`, module)
    .addDecorator(pageDecorator)
    .add('grid', () => (
        <div>
            <Row>
                <Col xs={8} />
                <Col xs={8} />
                <Col xs={8} />
            </Row>
            <Row>
                <Col xs={8} />
                <Col xs={8} />
                <Col xs={8} />
            </Row>
        </div>
    ));
