# FileSelectButton

### Description
Use the `<FileSelectButton />` when you want the user to select one or more files to upload.

### Usage
```jsx
<FileSelectButton
    icon="upload"
    iconColor="primary"
    busy={busyUploading}
    onSelect={(files) => console.log("FILES", files)}>
    
    Upload a file
</FileSelectButton>
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `busy` | bool | *no* | false | When true, will disable click and show a loading indicator. |
| `onSelect` | func | *no* | null | Select files callback. Returns an array with files. |

*Inherits all properties from `<Button />`*
