import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Spinner from "../../src/components/loader/Spinner"
import ProgressBar from "../../src/components/loader/ProgressBar"
import ProgressCircle from "../../src/components/loader/ProgressCircle"
import LoaderHorizontal from "../../src/components/loader/LoaderHorizontal"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"

import SpinnerReadme from "../../src/components/loader/Spinner/README.md"
import ProgressBarReadme from "../../src/components/loader/ProgressBar/README.md"
import ProgressCircleReadme from "../../src/components/loader/ProgressCircle/README.md"



// Decorator
const pageDecorator = (story) => (
    <Page>
        {story()}
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
        <Card>
            <CardContent>
                <Spinner />
            </CardContent>
        </Card>
    ))
    .add('large', () => (
        <Card>
            <CardContent>
                <Spinner size="large" />
            </CardContent>
        </Card>
    ));


/**
 * LOADER HORIZONTAL
 */
storiesOf(`${SECTION_TITLE}/LoaderHorizontal`, module)
    .addDecorator(pageDecorator)
    .add('default', () => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={6}>
                        <LoaderHorizontal/>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    ));



/**
 * PROGRESS BAR
 */
storiesOf(`${SECTION_TITLE}/ProgressBar`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ProgressBarReadme))
    .add('default', withState({
        barPercent: 89
    }, (store) => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={24}>
                        <ProgressBar percent={store.state.barPercent}>
                            Uploading file...
                        </ProgressBar>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    )));



/**
 * PROGRESS CIRCLE
 */
storiesOf(`${SECTION_TITLE}/ProgressCircle`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ProgressCircleReadme))
    .add('types', () => (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Row>
                        <Col span={6}>
                            <ProgressCircle percent={8}>
                                Primary
                            </ProgressCircle>
                        </Col>
                        <Col span={6}>
                            <ProgressCircle color="success" percent={74}>
                                Success
                            </ProgressCircle>
                        </Col>
                        <Col span={6}>
                            <ProgressCircle color="warning" percent={43}>
                                Warning
                            </ProgressCircle>
                        </Col>
                        <Col span={6}>
                            <ProgressCircle color="error" percent={21}>
                                Error
                            </ProgressCircle>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
        </React.Fragment>
    ))
    .add('sizes', () => (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Row>
                        <Col span={8}>
                            <ProgressCircle percent={89} size="small">
                                Small
                            </ProgressCircle>
                        </Col>
                        <Col span={8}>
                            <ProgressCircle percent={89}>
                                Regular
                            </ProgressCircle>
                        </Col>
                        <Col span={8}>
                            <ProgressCircle percent={89} size="large">
                                Large
                            </ProgressCircle>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
        </React.Fragment>
    ));


