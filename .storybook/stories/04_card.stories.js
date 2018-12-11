import React from 'react';

import { storiesOf } from '@storybook/react'
// import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardTitle from "../../src/components/card/CardTitle"
import CardContent from "../../src/components/card/CardContent"
import Badge from "../../src/components/notify/Badge"


// Section title
const SECTION_TITLE = "04 - Card";

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
    .add('card with content', () => (
        <Card>
            <CardContent>
                Lorem ipsum dolor sit amet, mel aliquip consetetur ea, postulant salutandi et ius.
                Quas semper dissentiunt ad mel, in putent minimum ius, ne doctus audiam menandri mel.
                In amet utroque facilisi quo, mei ad mutat graeci evertitur, natum fastidii no mel.
                Etiam praesent moderatius an vis, vim velit tollit cu.<br /><br />
                Numquam omittantur definitiones et mel, putent ocurreret id eum.
                Pri harum detracto ex, te duis regione labores vim, mazim eirmod detracto eu qui.
                Duo eu volumus interesset, lobortis oportere id quo, consequat adipiscing theophrastus id sed.
                Nam ei aeque homero adversarium, inani nonumy aperiri nec ei.
                In tritani repudiandae vix, quo possit euismod torquatos cu.<br /><br />
                Mea paulo utinam gloriatur ea, feugiat efficiantur liberavisse ex sit.
                Dicta percipit cu pri, cu mel populo detraxit. Nam ei legere scaevola scripserit.
                Eum eu augue copiosae.
                Periculis contentiones cu ius, ignota labitur ius at, ius ancillae expetendis dissentiunt eu.
                Ei essent doctus fuisset duo, alii temporibus ut usu.
                Ne dolorem minimum praesent has, sea errem graecis te, vel cu amet repudiare.
                Duo nobis persius cu, ut mollis habemus vel. Cum omnium molestiae cu.
            </CardContent>
        </Card>
    ))
    .add('card with title', () => (
        <Card>
            <CardTitle title={"This is the card title"} />
            <CardContent>
                Lorem ipsum dolor sit amet, mel aliquip consetetur ea, postulant salutandi et ius.
                Quas semper dissentiunt ad mel, in putent minimum ius, ne doctus audiam menandri mel.
                In amet utroque facilisi quo, mei ad mutat graeci evertitur, natum fastidii no mel.
                Etiam praesent moderatius an vis, vim velit tollit cu.
            </CardContent>
        </Card>
    ))
    .add('card with addons', () => (
        <Card>
            <CardTitle title={"This is the card title"}>
                <Badge color="primary" fill>New feature</Badge>
            </CardTitle>
            <CardContent>
                Lorem ipsum dolor sit amet, mel aliquip consetetur ea, postulant salutandi et ius.
                Quas semper dissentiunt ad mel, in putent minimum ius, ne doctus audiam menandri mel.
                In amet utroque facilisi quo, mei ad mutat graeci evertitur, natum fastidii no mel.
                Etiam praesent moderatius an vis, vim velit tollit cu.
            </CardContent>
        </Card>
    ));
