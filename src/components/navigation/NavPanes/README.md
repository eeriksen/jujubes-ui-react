# NavPanes

### Description

The `<NavPanes />` is a navigation element that lets you have multiple
panes of content that the user can toggle between.

### Usage

```javascript
import { NavPanes, SettingsList } from "@tv2no/ui-react";
const { Pane } = NavPanes;
```

```jsx
<NavPanes
    title="Some title here"
    action={<Button square silent icon="close" iconColor="primary" />}
    activeKey={activePane}
    onChange={setActivePane}
    embedded={embedded}
>
    <Pane key={1} icon="info" label="First pane">
        <SettingsList>
            <SettingsList.Item title="First section">
                Bacon ipsum dolor amet jowl pork loin corned beef meatball strip steak. Pork loin tenderloin kielbasa
                ham hock pork belly beef ribs turducken. Picanha ham hock drumstick tail venison cupim kevin beef
                meatball spare ribs jowl ham hamburger kielbasa. Chuck biltong leberkas, pastrami sausage buffalo doner
                hamburger boudin pork loin beef ribs spare ribs kevin ham. Pork belly porchetta swine frankfurter
                tri-tip chicken. Tenderloin landjaeger meatloaf jowl flank ham, brisket swine cupim leberkas drumstick
                boudin alcatra. Chuck flank alcatra ground round sausage.
            </SettingsList.Item>
            <SettingsList.Item title="Second section">
                Turkey pork belly filet mignon buffalo pancetta. Pancetta rump turducken tri-tip doner. Porchetta pork
                chop chicken, tail jerky buffalo ribeye ham t-bone pastrami meatball. Corned beef chuck buffalo swine,
                pork chop t-bone chicken ball tip bresaola filet mignon spare ribs shankle burgdoggen picanha leberkas.
                Picanha drumstick rump, corned beef t-bone sausage turkey leberkas shankle cow ribeye ball tip bacon.
                Pork loin leberkas filet mignon swine, ground round salami turducken shankle corned beef hamburger strip
                steak tenderloin kevin turkey picanha. Buffalo fatback filet mignon venison andouille beef alcatra flank
                picanha tongue salami short ribs.
            </SettingsList.Item>
            <SettingsList.Item title="Third section">
                Shoulder turducken flank pastrami landjaeger filet mignon. Bresaola meatloaf ball tip, jowl strip steak
                alcatra pork loin sirloin prosciutto meatball. Meatloaf ball tip boudin beef. Kevin shank pastrami
                alcatra pig pork chop beef ribs pancetta.
            </SettingsList.Item>
        </SettingsList>
    </Pane>
    <Pane key={2} icon="eye" label="Second pane">
        <SettingsList>
            <SettingsList.Item>Second nav pane</SettingsList.Item>
        </SettingsList>
    </Pane>
    <Pane key={3} icon="laptop" label="Third pane">
        <SettingsList>
            <SettingsList.Item>Third nav pane</SettingsList.Item>
        </SettingsList>
    </Pane>
</NavPanes>
```

### NavPanes properties

| Property     | Type   | Required | Default | Description                                                     |
| ------------ | ------ | -------- | ------- | --------------------------------------------------------------- |
| `title`      | string | _no_     | null    | The title of popup.                                             |
| `action`     | object | _no_     | null    | Add close button or similar on the right side of the title bar. |
| `activeKey`  | number | _no_     | null    | The current active panes key.                                   |
| `onChange()` | func   | _no_     | null    | Callback triggered when panes are toggled.                      |
| `embedded`   | bool   | _no_     | false   | Use when embedding in a popup or similar.                       |

### NavPanes.Pane properties

| Property | Type   | Required | Default | Description             |
| -------- | ------ | -------- | ------- | ----------------------- |
| `key`    | number | _no_     | null    | The key of this pane.   |
| `label`  | string | _no_     | null    | The label of this pane. |
