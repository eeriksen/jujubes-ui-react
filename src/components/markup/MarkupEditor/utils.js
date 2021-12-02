import { Modifier, EditorState } from "draft-js";
import { Map } from "immutable";
import { findParentWithCSS } from "../../../utils/domUtils";

/**
 * Calculate the width of the toolbar
 * @param {*} toolbar
 * @param {*} itemGroupClass
 * @returns
 */
export function getToolbarWidth(toolbar, itemGroupClass) {
    // Sort item groups by biggest size
    const itemGroups = toolbar.querySelectorAll(`.${itemGroupClass}`);
    let itemGroupWidths = [];
    itemGroups.forEach((itemGroup) => {
        itemGroupWidths.push(itemGroup.getBoundingClientRect().width);
    });
    itemGroupWidths.sort((a, b) => b - a);

    // Find parent padding
    let parentPadding = 0;
    const { element: parent } = findParentWithCSS(itemGroups[0].parentElement, "padding-left");
    if (parent) {
        const style = getComputedStyle(parent);
        parentPadding = parseInt(style.getPropertyValue("padding-left"), 10) * 2;
    }

    return itemGroupWidths[0] + itemGroupWidths[1] + parentPadding;
}

/**
 * Get current entity key
 * @param editorState
 * @returns {*|string}
 */
export function getCurrentEntityKey(editorState) {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const contentState = editorState.getCurrentContent();
    const anchorBlock = contentState.getBlockForKey(anchorKey);
    const offset = selection.anchorOffset;
    const index = selection.isBackward ? offset - 1 : offset;
    return anchorBlock.getEntityAt(index);
}

/**
 * Get current entity
 * @param editorState
 * @returns {*}
 */
export function getCurrentEntity(editorState) {
    const contentState = editorState.getCurrentContent();
    const entityKey = getCurrentEntityKey(editorState);
    return entityKey ? contentState.getEntity(entityKey) : null;
}

/**
 * Check if current selection has entity
 * @param editorState
 * @param entityType
 * @returns {*|boolean}
 */
export function hasEntity(editorState, entityType) {
    const entity = getCurrentEntity(editorState);
    return entity && entity.getType() === entityType;
}

/**
 * Set block data
 * @param editorState
 * @param data
 * @returns {EditorState}
 */
export function setBlockData(editorState, data) {
    const newContentState = Modifier.setBlockData(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        new Map(data)
    );

    return EditorState.push(editorState, newContentState, "change-block-data");
}

/**
 * Function will return currently selected blocks metadata
 * @param editorState
 * @returns {Map<any, any>}
 */
export function getSelectedBlocksMetadata(editorState) {
    let metaData = new Map({});
    const selectedBlocks = getSelectedBlocksMap(editorState).toList();
    if (selectedBlocks && selectedBlocks.size > 0) {
        for (let i = 0; i < selectedBlocks.size; i += 1) {
            const data = selectedBlocks.get(i).getData();
            if (!data || data.size === 0) {
                metaData = metaData.clear();
                break;
            }
            if (i === 0) {
                metaData = data;
            } else {
                let deleteKey = null;
                metaData.forEach((value, key) => {
                    const dataValue = data.get(key);
                    if (!dataValue || dataValue !== value) {
                        deleteKey = key;
                    }
                });
                if (deleteKey) {
                    metaData = metaData.delete(deleteKey);
                }
                if (metaData.size === 0) {
                    metaData = metaData.clear();
                    break;
                }
            }
        }
    }
    return metaData;
}

/**
 * Function returns collection of currently selected blocks.
 */
export function getSelectedBlocksMap(editorState) {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const startKey = selectionState.getStartKey();
    const endKey = selectionState.getEndKey();
    const blockMap = contentState.getBlockMap();
    return blockMap
        .toSeq()
        .skipUntil((_, k) => k === startKey)
        .takeUntil((_, k) => k === endKey)
        .concat([[endKey, blockMap.get(endKey)]]);
}

/**
 * Create type strategy for decorator
 * @param type
 * @returns {function(*, *=, *)}
 */
export function createTypeStrategy(type) {
    return (contentBlock, callback, contentState) => {
        contentBlock.findEntityRanges((character) => {
            const entityKey = character.getEntity();
            return entityKey !== null && contentState.getEntity(entityKey).getType() === type;
        }, callback);
    };
}

export function replaceOldBoldTag(html) {
    return html
        .replace(new RegExp("<b>", "g"), "<strong>")
        .replace(new RegExp("<b ", "g"), "<strong ")
        .replace(new RegExp("</b>", "g"), "</strong>");
}
