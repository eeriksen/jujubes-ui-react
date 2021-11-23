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









