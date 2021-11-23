import React, { useState, useEffect } from "react";
import { RichUtils } from "draft-js";
import { ToolbarItem } from "../ToolbarItem";

export const InlineStyleAction = ({ label, icon, inlineStyle, editorState, onChange, disabled }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const currentInlineStyle = editorState.getCurrentInlineStyle();
        setActive(currentInlineStyle.has(inlineStyle));
    }, [editorState, inlineStyle]);

    /**
     * Toggle action
     * @private
     */
    const toggleAction = () => {
        // Toggle inline style
        const newEditorState = RichUtils.toggleInlineStyle(editorState, inlineStyle);

        // Apply changes
        onChange(newEditorState);
    };

    return <ToolbarItem label={label} icon={icon} active={active} onClick={toggleAction} disabled={disabled} />;
};
