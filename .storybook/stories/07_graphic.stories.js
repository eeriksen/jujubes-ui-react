import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'

import { Page } from "../../src/components/page/Page"
import { Card } from "../../src/components/card/Card"
import { CardContent } from "../../src/components/card/CardContent"
import { Icon } from "../../src/components/graphic/Icon"
import { Row } from "../../src/components/grid/Row"
import { Col } from "../../src/components/grid/Col"

import IconReadme from "../../src/components/graphic/Icon/README.md"


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
const SECTION_TITLE = "07 - Graphic";

/**
 * ICONS
 */
storiesOf(`${SECTION_TITLE}/Icon`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(IconReadme))
    .add('list', () => {

        // Icon list
        const iconList = Icon.iconList;

        return (
            <Row>
                {iconList.map((icon, index) => (
                    <Col key={index} sm={{span: 4}}>
                        <Icon name={icon} presentation />
                    </Col>
                ))}
            </Row>
        )
    });
