import React, { useState, useEffect } from "react"
import { RichUtils } from "draft-js"
import { ToolbarItem } from "../ToolbarItem"


export const BlockTypeAction = ({ label, icon, blockType, editorState, onChange, disabled }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const selection = editorState.getSelection();
        const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
        setActive(blockType === currentBlockType);
    }, [editorState]);

    const toggleAction = () => {

        // Toggle block type
        const newEditorState = RichUtils.toggleBlockType(editorState, blockType);

        // Apply changes
        onChange(newEditorState);
    };


    return (
        <ToolbarItem
            label={label}
            icon={icon}
            active={active}
            onClick={toggleAction}
            disabled={disabled}
        />
    )
}
