import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'

import Page from "../../src/components/page/Page"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"

import GridReadme from "../../src/components/grid/README.md"

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
    .addDecorator(withReadme(GridReadme))
    .add('grid', () => (
        <div>
            <Row spacing="bottom">
                <Col span={24} />
            </Row>
            <Row spacing="bottom">
                <Col span={12} />
                <Col span={12} />
            </Row>
            <Row spacing="bottom">
                <Col span={8} />
                <Col span={8} />
                <Col span={8} />
            </Row>
            <Row spacing="bottom">
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
                <Col span={6} />
            </Row>
            <Row spacing="bottom">
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
            </Row>
            <Row spacing="bottom">
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
                <Col span={3} />
            </Row>
            <Row spacing="bottom">
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
                <Col span={2} />
            </Row>
            <Row spacing="bottom">
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
                <Col span={1} />
            </Row>
        </div>
    ));
