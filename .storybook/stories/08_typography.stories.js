import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'

import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Page from "../../src/components/page/Page/index"
import Text from "../../src/components/typography/Text/index"
import Paragraph from "../../src/components/typography/Paragraph/Paragraph"
import Code from "../../src/components/typography/Code"

import TextReadme from "../../src/components/typography/Text/README.md"
import ParagraphReadme from "../../src/components/typography/Paragraph/README.md"

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
const SECTION_TITLE = "08 - Typography";


/**
 * TEXT
 */
storiesOf(`${SECTION_TITLE}/Text`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(TextReadme))
    .add('sizes', () => (
        <React.Fragment>
            <Paragraph>
                <Text size="small">
                    This is smal text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text>
                    This is regular text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text size="medium">
                    This is medium text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text size="large">
                    This is large text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
        </React.Fragment>
    ))
    .add('weights', () => (
        <React.Fragment>
            <Paragraph>
                <Text>
                    This is regular text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text weight="medium">
                    This is medium text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text weight="bold">
                    This is bold text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
        </React.Fragment>
    ))
    .add('colors', () => (
        <React.Fragment>
            <Paragraph>
                <Text>
                    This is regular text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="base80">
                    This is base80 text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="base60">
                    This is base60 text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="base40">
                    This is base40 text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="contrast">
                    This is contrast text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="primary">
                    This is primary text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="info">
                    This is info text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="success">
                    This is success text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="warning">
                    This is warning text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text color="error">
                    This is error text. Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
        </React.Fragment>
    ));



/**
 * PARAGRAPH
 */
storiesOf(`${SECTION_TITLE}/Paragraph`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ParagraphReadme))
    .add('default', () => (
        <React.Fragment>
            <Paragraph>
                <Text>
                    Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text>
                    Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                    Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                    Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
                </Text>
            </Paragraph>
        </React.Fragment>
    ));


/**
 * CODE
 */
storiesOf(`${SECTION_TITLE}/Code`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(ParagraphReadme))
    .add('default', () => (
        <React.Fragment>
            <Code>
                Bacon ipsum dolor amet chicken tongue strip steak, alcatra short loin bresaola drumstick ham hock.
                Sirloin venison biltong swine pig. Fatback jerky shoulder drumstick pancetta beef ribs turkey porchetta.
                Porchetta filet mignon tail tongue landjaeger. Pork belly landjaeger swine.
            </Code>
        </React.Fragment>
    ));
