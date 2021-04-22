import React from "react";
import PropTypes from "prop-types";

export const Highlighter = ({ term, children }) => {
    return React.Children.map(children, (child) => {
        if (typeof child === "string") {
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

Highlighter.propTypes = {
    /**
     * Regular expression that selects text that should be highlighted.
     */
    term: PropTypes.string,
    /**
     * Any content. (Will only mark plain text and not text inside components).
     */
    children: PropTypes.any
};
