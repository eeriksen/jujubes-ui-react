import React, { useState, useEffect } from "react";
import { ToolbarItem } from "../ToolbarItem";

import { setBlockData, getSelectedBlocksMetadata } from "../../utils";

export const BlockStyleAction = ({ label, icon, editorState, blockStyle, onChange, disabled }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Check if active
        const metaData = getSelectedBlocksMetadata(editorState).toJSON();
        let active = true;
        for (const key in blockStyle) {
            if (!metaData.hasOwnProperty(key) || metaData[key] !== blockStyle[key]) {
                active = false;
                break;
            }
        }
        setActive(active);
    }, [editorState]);

    /**
     * Toggle action
     * @private
     */
    const toggleAction = () => {
        // Get block meta data
        const metaData = getSelectedBlocksMetadata(editorState).toJSON();

        // Toggle block style properties
        for (const key in blockStyle) {
            if (metaData.hasOwnProperty(key) && metaData[key] === blockStyle[key]) {
                delete blockStyle[key];
            }
        }

        // Apply style
        const newEditorState = setBlockData(editorState, blockStyle);

        // Apply changes
        onChange(newEditorState);
    };

    return <ToolbarItem label={label} icon={icon} active={active} onClick={toggleAction} disabled={disabled} />;
};
