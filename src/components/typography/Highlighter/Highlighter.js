import React from "react";
import PropTypes from "prop-types";

export const Highlighter = ({ term, children, disabled }) => {
    return React.Children.map(children, (child) => {
        if (typeof child === "string" && !disabled) {
            const regex = new RegExp(term, "gi");
            const markedText = child.replace(regex, (match) => {
                return `<mark>${match}</mark>`;
            });
            return React.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: markedText
                }
            });
        } else {
            return child;
        }
    });
};

Highlighter.defaultProps = {
    term: null,
    disabled: false
}

Highlighter.propTypes = {
    /**
     * Regular expression that selects text that should be highlighted.
     */
    term: PropTypes.string,
    /**
     * Disable highlighting.
     */
    disabled: PropTypes.bool,
    /**
     * Any content. (Will only mark plain text and not text inside components).
     */
    children: PropTypes.any
};
