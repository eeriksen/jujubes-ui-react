import React from 'react';

import {storiesOf} from '@storybook/react'
import {withReadme} from 'storybook-readme'
import { action } from '@storybook/addon-actions'

import { Page } from "../../src/components/page/Page"
import { Card } from "../../src/components/card/Card"
import { CardContent } from "../../src/components/card/CardContent"
import { Row } from "../../src/components/grid/Row"
import { Col } from "../../src/components/grid/Col"
import { Image } from "../../src/components/media/Image"
import { Icon } from "../../src/components/graphic/Icon"
import { Button } from "../../src/components/button/Button"

import ImageReadme from "../../src/components/media/Image/README.md"

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


const IMAGE_SRC = "https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg";

// Section title
const SECTION_TITLE = "12 - Media";

/**
 * IMAGE
 */
storiesOf(`${SECTION_TITLE}/Image`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ImageReadme))
    .add('default', () => (
        <Image src={IMAGE_SRC} />
    ))
    .add('thumbnails', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col sm={8}>Small</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} thumbnail="small"/>
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Regular</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} thumbnail="regular" />
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Medium</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} thumbnail="medium"/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>Large</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} thumbnail="large"/>
                </Col>
            </Row>
        </React.Fragment>
    ))
    .add('scales', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col sm={8}>Fill</Col>
                <Col sm={16}>
                    <div style={{position: "relative", height: "150px"}}>
                        <Image src={IMAGE_SRC} scale="fill"/>
                    </div>
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Square</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} scale="square"/>
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Aspect (16:9)</Col>
                <Col sm={16} style={{height: "200px"}}>
                    <Image src={IMAGE_SRC} scale="16:9" />
                </Col>
            </Row>
        </React.Fragment>
    ))
    .add('mods', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col sm={8}>Rounded</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} mod="rounded" />
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Oval</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} mod="oval" />
                </Col>
            </Row>
            <Row>
                <Col sm={8}>Grayscale</Col>
                <Col sm={16}>
                    <Image src={IMAGE_SRC} mod="gray" />
                </Col>
            </Row>
        </React.Fragment>
    ))
    .add('placeholder', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col sm={8}>Default</Col>
                <Col sm={16}>
                    <Image scale="square" />
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Thumbnail</Col>
                <Col sm={16}>
                    <Image thumbnail="regular" />
                </Col>
            </Row>
            <Row spacing="bottom">
                <Col sm={8}>Custom</Col>
                <Col sm={16}>
                    <Image thumbnail="regular" placeholder={<Icon color="primary" name="gear" />} />
                </Col>
            </Row>
        </React.Fragment>
    ))
    .add('image upload', () => (
        <Image
            thumbnail="large"
            onFileSelect={action("Image file")}
            placeholder={<Icon color="primary" name="upload" />}
        />
    ))
    .add('busy', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col span={3}>
                    <Image busy scale="square" mod="oval" src={IMAGE_SRC} />
                </Col>
                <Col span={6}>
                    <Image busy scale="square"  />
                </Col>
                <Col span={9}>
                    <Image busy scale="square" />
                </Col>
            </Row>
            <Image src={IMAGE_SRC} busy />
        </React.Fragment>
    ))
    .add('actions', () => (
        <React.Fragment>
            <Row spacing="bottom">
                <Col span={4}>
                    <Image scale="square" src={IMAGE_SRC} actions={<Button square size="small" color="error" icon="close" />} />
                </Col>
                <Col span={8}>
                    <Image scale="square" src={IMAGE_SRC} actions={<Button square size="small" color="error" icon="close" />} />
                </Col>
                <Col span={12}>
                    <Image scale="square" src={IMAGE_SRC} actions={<Button square size="small" color="error" icon="close" />} />
                </Col>
            </Row>
            <Image src={IMAGE_SRC} actions={<Button square size="small" color="error" icon="close" />} />
        </React.Fragment>
    ));
