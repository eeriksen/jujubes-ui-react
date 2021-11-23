import React from "react";

export const Link = ({ contentState, entityKey, children }) => {
    const { url } = contentState.getEntity(entityKey).getData();
    return (
        <a href={url} title={url}>
            {children}
        </a>
    );
};
