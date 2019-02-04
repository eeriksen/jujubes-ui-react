# Image

### Description
The `<Image />` component is used to display an image.
The image cropped to a square by default. Control the display of the image by changing
the `size` property.

### Usage
```javascript
import { Image } from "tv2-ui-react"
```

```jsx
<Image src={imageSource} size="actual" />
```


### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `src` | string | *no* | null | The image source. |
| `busy` | bool | *no* | null | Display a spinner in the picture area. Nice when you want to show an upload progress. |
| `size` | string | *no* | null | The size of the image. ("small", "medium", "large", "xlarge", "fill", "fit", "actual") |
| `aspect` | number | *no* | null | Display the image in an aspect ratio. I.e. if you want 16:9, supply the parameter with 9/16. |
| `rounded` | bool | *no* | null | Rounded image corners. |
| `circle` | bool | *no* | null | Masked as a circle. |
| `framed` | bool | *no* | null | Adds a bordered frame around the image. |
| `icon` | string | *no* | null | The icon used as placeholder when there is no image source. |
| `iconColor` | string | *no* | null | The color of the placeholder icon. ("primary") |
| `grayscale` | bool | *no* | null | Show the image as grayscale. |
| `onClick()` | func | *no* | null | Triggered when image is clicked. |
| `onFileSelect()` | bool | *no* | null | Will open the file selector prompt when image is clicked and return an image file if selected. |
| `alt` | string | *no* | null | The image alt text. |
