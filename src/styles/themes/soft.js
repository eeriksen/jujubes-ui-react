export default {
    "id": "soft",
    "name": "Soft",
    "fonts": {
        "google": {
            "families": ["Poppins:200,400,500,700"]
        }
    },
    "properties": {
        "fontFamily": {
            "primary": "'Poppins', sans-serif",
            "titles": "'Poppins', sans-serif"
        },
        "fontSize": {
            "root": "14px",
            "tiny": "0.785rem",
            "small": "0.857rem",
            "regular": "1rem",
            "medium": "1.142rem",
            "large": "1.285rem",
            "heading4": "1.428rem",
            "heading3": "1.8rem",
            "heading2": "2.285rem",
            "heading1": "2.857rem"
        },
        "fontWeight": {
            "light": "200",
            "regular": "400",
            "medium": "500",
            "bold": "700"
        },
        "lineHeight": {
            "small": "1.2",
            "regular": "1.6"
        },
        "color": {
            "base": "#181c32",
            "contrast": "#ffffff",
            "background": "#fafafa",
            "backgroundContent": "#ffffff",
            "backgroundShade": "#f4f4f4",
            "backgroundPop": "#ffffff",
            "primary": "#3699ff",
            "primaryContrast": "#ffffff",
            "accent": "#36bfff",
            "accentContrast": "#ffffff",
            "success": "#34d896",
            "error": "#ff668d",
            "warning": "#e4bb40",
            "info": "#4AA1DB",
            "attention": "#f6fd9a",
            "statusText": "#ffffff",
            "link": "#2A82DC"
        },
        "spacing": {
            "small": "0.357rem",
            "regular": "0.714rem",
            "medium": "1.5rem",
            "large": "2.14rem",
            "edges": "2rem",
            "edgesMobile": "0.5rem"
        },
        "elementSize": {
            "small": "2.57rem",
            "regular": "3.42rem",
            "big": "4.14rem"
        },
        "borderRadius": {
            "form": "0.6rem",
            "buttons": "0.6rem",
            "content": "1rem"
        },
        "boxShadow": {
            "content": "0 20px 20px rgba(var(--color_base), 0.04)",
            "pop": "0 5px 30px rgba(var(--color_base), 0.15)"
        },
        "input": {
            "backgroundColor": "rgba(var(--color_base), 0.01)",
            "border": "none",
            "borderFocus": "none",
            "borderError": "1px solid rgb(var(--color_error))",
            "boxShadow": "inset 0 0 8px rgba(var(--color_base), 0.1)",
            "boxShadowFocus": "inset 0 0 8px 0 rgba(var(--color_base), 0.2)",
            "boxShadowError": "0 0 5px 0 rgba(var(--color_error), 0.3)"
        },
        "button": {
            "borderWidth": "0",
            "backgroundColor": "rgba(var(--color_base), 0.03)",
            "boxShadowHover": "none"
        },
        "navMain": {
            "backgroundColor": "var(--color_background)",
            "foregroundColor": "var(--color_base)",
            "accentColor": "var(--color_primary)"
        },
        "navBar": {
            "backgroundColor": "var(--color_background)",
            "foregroundColor": "var(--color_base)",
            "accentColor": "var(--color_primary)",
            "boxShadow": "0 1px 10px 1px rgba(var(--color_background), 1)",
            "subBackgroundColor": "var(--color_background)"
        },
        "navLogo": {
            "backgroundColor": "var(--color_background)",
            "fill": "var(--color_primary)"
        },
        "splash": {
            "backgroundColor": "var(--color_primary)",
            "foregroundColor": "var(--color_primaryContrast)"
        },
        "pageHero": {
            "imageOffset": "0",
            "imageRadius": "5px",
            "imagePadding": "0"
        },
        "navMenuHeading": {
            "color": "rgba(var(--navMain_foregroundColor), 0.2)"
        },
        "navMenuItem": {
            "backgroundActive": "var(--color_contrast)"
        },
        "card": {
            "highlightBorder": "none"
        },
        "cardTitle": {
            "actionBorder": "none",
            "actionIconColor": "rgba(var(--color_primary), 1)",
            "actionPadding": "0.4rem",
            "actionBorderRadius": "var(--borderRadius_content",
            "marginBottom": "calc(var(--spacing_regular) * -1)"
        },
        "cardContent": {
            "border": "none"
        }
    }
}
