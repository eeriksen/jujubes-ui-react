# Logo

### Description
The TV 2 logo as SVG.

### Usage
```jsx
<Logo />
```

### Properties
| Property | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | *no* | null | Color of logo. (contrast, base). |

### Color
The best way to control the color of the logo is through CSS, not properties.
If you use SASS, you can use a mixin to set the logo color:

```css
@mixin m-logoColor($color, $withTransition:false){
    svg {
        fill: $color;

        @if $withTransition {
            transition: fill 0.2s ease;
        }
    }
}
```
