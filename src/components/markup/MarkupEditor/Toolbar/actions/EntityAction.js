import React from "react";
import { EditorState, RichUtils } from "draft-js";

import { ToolbarItem } from "../ToolbarItem";
import { getCurrentEntity, hasEntity } from "../../utils";

export const EntityAction = ({
    label,
    icon,
    editorState,
    component,
    entityType,
    onSetEntity,
    onChange,
    mutability,
    disabled
}) => {
    /**
     * Create entity
     * @private
     */
    const showEditComponent = () => {
        // Get entity data
        const currentEntity = hasEntity(editorState, entityType) ? getCurrentEntity(editorState) : null;
        const entityData = currentEntity ? currentEntity.getData() : null;

        // Render component with props
        const instance = React.createElement(component, {
            editorState: editorState,
            data: entityData,
            onPlace: handlePlaceEntity,
            onRemove: handleRemoveEntity
        });

        // Set as editing
        onSetEntity(instance);
    };

    /**
     * Set entity
     */
    const handlePlaceEntity = (data) => {
        // Get the entire content block
        const contentState = editorState.getCurrentContent();

        // Create entity around content block
        const contentStateWithEntity = contentState.createEntity(entityType, mutability || "MUTABLE", data);

        // Get entity key
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        // Toggle link
        let newState = RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey);

        // Set selection to markup again
        const selectionState = EditorState.forceSelection(newState, editorState.getSelection());

        // Hide action
        onSetEntity();

        // Handle change
        onChange(selectionState);
    };

    /**
     * Remove entity
     * @private
     */
    const handleRemoveEntity = () => {
        // Get current selection
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            // New state
            const newState = RichUtils.toggleLink(editorState, selection, null);

            // toggleLink should be named toggleEntity: https://github.com/facebook/draft-js/issues/737
            onChange(newState);

            // Hide action
            onSetEntity();
        }
    };

    return (
        <ToolbarItem
            label={label}
            icon={icon}
            active={hasEntity(editorState, entityType)}
            onClick={showEditComponent}
            disabled={disabled}
        />
    );
};
