/**
 * Find parent element with a given CSS property with or without value
 * @param {*} element
 * @param {*} property
 * @param {*} value
 * @returns
 */
export const findParentWithCSS = (element, property, value) => {
    while (element !== null) {
        const style = window.getComputedStyle(element);
        const propValue = style.getPropertyValue(property);
        if (propValue === value || (!value && propValue !== "none")) {
            return {
                element,
                propValue
            };
        }
        element = element.parentElement;
    }
    return null;
};


/**
 * Check if the given object is a HTML element
 * @param {*} o
 * @returns
 */
export const isElement = (o) => {
    return typeof HTMLElement === "object"
        ? o instanceof HTMLElement //DOM2
        : o &&
              typeof o === "object" &&
              o !== null &&
              o.nodeType === 1 &&
              typeof o.nodeName === "string";
};
