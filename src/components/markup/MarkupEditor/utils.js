import { getVisibleSelectionRect, Modifier, EditorState } from "draft-js";
import { Map } from "immutable";

/**
 * Get the coordinates of the editor selection
 * @param editor
 * @param toolbar
 * @returns {*}
 */
export function getSelectionCoords(editor, toolbar) {
    if (!editor || !toolbar) {
        return null;
    }

    // TOOLBAR SIZE
    // Fetch item groups
    const itemGroups = toolbar.querySelectorAll(".toolbar_item_group");
    let itemGroupWidths = [];
    itemGroups.forEach((itemGroup) => {
        itemGroupWidths.push(itemGroup.getBoundingClientRect().width);
    });
    itemGroupWidths.sort((a, b) => b - a);
    const toolbarWidth = itemGroupWidths[0] + itemGroupWidths[1] + 10;
    const toolbarHeight = toolbar.offsetHeight;

    // TOOLBAR POSITION
    const win = editor.ownerDocument.defaultView || window;
    const selectionBounds = getVisibleSelectionRect(win);
    const arrowSize = 20;
    const edgeSpacing = 10;

    if (!selectionBounds || !toolbar) {
        return null;
    }

    // ###### FIXED POSITIOINGS
    let offsetLeft = selectionBounds.left + selectionBounds.width / 2;
    let offsetTop = selectionBounds.top - (toolbarHeight + arrowSize);
    let arrowStyle = {
        left: "50%"
    };

    // HORIZONTAL ALIGNMENT
    // Find available space to the left of selection
    const toolbarLeftSpace = offsetLeft - edgeSpacing;
    const toolbarLeftOverflow = toolbarWidth / 2 - toolbarLeftSpace;

    // Find available space to the right of selection
    const toolbarRightSpace = win.innerWidth - offsetLeft - edgeSpacing;
    const toolbarRightOverflow = toolbarWidth / 2 - toolbarRightSpace;

    // Make sure toolbar is not disappearing outside screen
    if (toolbarLeftOverflow > 0) {
        offsetLeft = offsetLeft + toolbarLeftOverflow;
        arrowStyle.left = `${toolbarWidth / 2 - toolbarLeftOverflow}px`;
    } else if (toolbarRightOverflow > 0) {
        offsetLeft = offsetLeft - toolbarRightOverflow;
        arrowStyle.left = `${toolbarWidth / 2 + toolbarRightOverflow}px`;
    }

    // VERTICAL ALIGNMENT
    const toolbarTopSpace = selectionBounds.top;
    const toolbarTopOverflow = toolbarHeight + arrowSize + edgeSpacing - toolbarTopSpace;
    if (toolbarTopOverflow > 0) {
        offsetTop = selectionBounds.bottom + arrowSize;
        arrowStyle = {
            ...arrowStyle,
            bottom: "auto",
            transform: "translate(-50%, -50%) rotate(0)"
        };
    }

    // VISIBILITY
    const hidden =
        selectionBounds.left < 0 ||
        selectionBounds.right < 0 ||
        selectionBounds.top < 0 ||
        selectionBounds.top > win.innerHeight;

    return {
        toolbarStyle: {
            left: offsetLeft,
            top: offsetTop,
            width: toolbarWidth,
            ...(hidden && { opacity: 0 })
        },
        arrowStyle
    };
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

export const findParentWithCSS = (element, property, value) => {
    while (element !== null) {
        const style = window.getComputedStyle(element);
        const propValue = style.getPropertyValue(property);
        if (propValue === value) {
            return element;
        }
        element = element.parentElement;
    }
    return null;
};
