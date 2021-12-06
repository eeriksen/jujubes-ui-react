# Jujubes UI

Jujubes is dependency biased admin UI component library in React.
## Usage
 
Install the dependency:

`npm install jujubes-ui-react`

Install required peer dependencies if not already in your project: 

`npm install react react-dom react-router-dom`

Import the CSS file somewhere high up in your component hierarchy:

`import "jujubes-ui-react/dist/styles.css"`

Import components at will:

`import { Button } from "jujubes-ui-react"`


## Documentation

https://jujubes-ui-react.netlify.app

## Development

Create a new component guide: 

`sh new-component.sh`

Remember to export the component in the category folders `index.js` file.

Run the storybook while you develop:

`npm start`

## Collaboration

Pull requests are welcome.



## Changelog

### [1.3.3] - 2021-12-06
#### Changes
- `<Button>`: Changed to `display: inline-flex`.
- `<NavButton>`: `link` is now replacing current route.

### [1.3.0] - 2021-12-02
#### Breaking changes
- `<PageCrumbs|Crumb>`: Has been deprecated in favor of dynamic crumbs with `<Breadcrumb>` and `<BreadcrumbTrail>`.
#### New
- Added a `soft` theme. and added more css-variables.

### [1.2.3] - 2021-11-26
#### New
- `<PageLoader>`: Used to display a loader before content is loaded.
#### Breaking changes
- `<Page>`: Removed `loading` property. Use `<PageLoader>` to display loading content.
- `<PageActions>`: Label is now moved from `children` to `label` on `<Action>`. `children` is now reserved for actions with content. `<PageActions>` on desktop will create a dedicated column. Added `title` on `<PageActions>` which determined the title of the action-card on desktop. 
#### Changes
- `<PopOver>`: Better positiong logic.
- `<Icon>`: `plus-big` icon removed. `plus-small` is now same size as `plus` was.
  
  
### [1.2.1] - 2021-11-24
#### Changes
- `<MarkupEditor>`: Fixed position. More agile.
- `<PopupTitle>`: Changed colors.
- `<Col>`: `align` also works with `span`.

### [1.2.0] - 2021-11-23
#### New
- `<MarkupEditor>`: Added markup editor.

### [1.1.0] - 2021-11-09
#### Changes
- Added chunks of libs as "image_editor", "emojis" and "dates".

### [1.0.29] - 2021-11-09
#### Image editor
- `<ImageEditor />`: Edit images.

### [1.0.27] - 2021-11-09
#### Changes
- `<Button />`: Added `symbol` and `pill` properties.









