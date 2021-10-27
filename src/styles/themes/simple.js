export default {
    "id": "simple",
    "name": "Simple",
    "fonts": {
        "google": {
            "families": ["Nunito Sans:300,400,600,800"]
        }
    },
    "properties": {
        "fontFamily": {
            "primary": "'Nunito Sans', sans-serif",
            "titles": "'Nunito Sans', sans-serif"
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
            "light": "300",
            "regular": "400",
            "medium": "600",
            "bold": "800"
        },
        "lineHeight": {
            "small": "1.2",
            "regular": "1.6"
        },
        "color": {
            "base": "#181c32",
            "contrast": "#ffffff",
            "background": "#fafafa",
            "backgroundContent": "#fafafa",
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
            "medium": "1.42rem",
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
            "form": "5px",
            "buttons": "5px",
            "content": "0"
        },
        "boxShadow": {
            "regular": "none",
            "medium": "0 1px 15px 1px rgba(var(--color_base), 0.2)",
            "large": "0 1px 25px 1px rgba(var(--color_base), 0.2)"
        },
        "input": {
            "border": "1px solid rgba(var(--color_base), 0.2)",
            "borderFocus": "1px solid rgb(var(--color_primary))",
            "borderError": "1px solid rgb(var(--color_error))",
            "boxShadowFocus": "0 0 5px 0 rgba(var(--color_primary), 0.3)",
            "boxShadowError": "0 0 5px 0 rgba(var(--color_error), 0.3)"
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
        "pageNav": {
            "borderBottom": "2px solid rgba(var(--color_base), 0.1)"
        },
        "pageCrumbs": {
            "backgroundMobile": "none"
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
        "cardTitle": {
            "borderBottom": "1px dotted rgba(var(--color_base), 0.1)",
            "actionBorder": "none"
        },
        "cardContent": {
            "border": "none"
        }
    }
}
