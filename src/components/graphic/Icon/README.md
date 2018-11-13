# Icon

### Description
In order to keep a consistent look across all application utlizing this UI Toolkit,
we limit the usage of icons to the icons provided by the toolkit.
All icons are flat minimized/uglified SVG icons.

### Usage
```jsx
<Icon name="gear" />
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | string | *yes* | null | The name of the icon to use. |
| `color` | string | *no* | null | The color of the icon. (base80, base60, base40, info, primary, success, warning, error). |
| `size` | string | *no* | null | The size of the icon. (small, medium, large, xLarge, xxLarge). |
| `rotate` | bool | *no* | false | The icon should rotate. |
| `className` | string | *no* | null | Append class to icon. |

### Color and size
The best way to control the color and size of an icon, is through CSS, not properties.
If you use SASS, you can use mixins to set the icon color and size like so:

```css
@mixin m-iconColor($color, $withTransition:false){
    svg {
        fill: $color;

        @if $withTransition {
            transition: fill 0.2s ease;
        }
    }
}

@mixin m-iconSize($size, $maxSize:null){
    svg {
        width: $size;
        height: $size;

        @if $maxSize {
            max-width: $maxSize;
        }
    }
}
```

### Adding icons

In order to add icons, you should do the following:

1. Find a nice flat icon from: https://www.flaticon.com/
2. Copy the icons svg element from "inspect element" in Chrome.
3. Paste the SVG code in to SVGOMG to minify the code: https://jakearchibald.github.io/svgomg/
4. Copy and paste the minified svg code to a new row in the `<Icon />` component in the correct alpabetical order based on the name you choose.
5. The name should also be added to the correct alphabetical order in the array at the top of the component.

