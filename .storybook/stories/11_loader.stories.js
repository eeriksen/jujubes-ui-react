import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Spinner from "../../src/components/loader/Spinner"
import Progress from "../../src/components/loader/Progress"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"

import SpinnerReadme from "../../src/components/loader/Spinner/README.md"
import ProgressReadme from "../../src/components/loader/Progress/README.md"


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
const SECTION_TITLE = "12 - Loader";


/**
 * SPINNER
 */
storiesOf(`${SECTION_TITLE}/Spinner`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(SpinnerReadme))
    .add('default', () => (
        <Spinner />
    ))
    .add('large', () => (
        <Spinner large primary />
    ));


/**
 * PROGRESS
 */
storiesOf(`${SECTION_TITLE}/Progress`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ProgressReadme))
    .add('default', withState({
        barPercent: 89
    }, (store) => (
        <Row>
            <Col span={24}>
                <Progress percent={store.state.barPercent}>
                    Uploading file...
                </Progress>
            </Col>
        </Row>
    )))
    .add('circle', () => (
        <Row>
            <Col span={4}>
                <Progress circle percent={9} />
            </Col>
            <Col span={4}>
                <Progress circle color="success" percent={59} />
            </Col>
            <Col span={4}>
                <Progress circle color="error" percent={89} />
            </Col>
        </Row>
    ));

