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

    const editorBounds = editor.getBoundingClientRect();
    const win = editor.ownerDocument.defaultView || window;
    const rangeBounds = getVisibleSelectionRect(win);
    const toolbarHeight = toolbar.offsetHeight;
    const toolbarWidth = toolbar.offsetWidth;
    const arrowSize = 20;

    if (!rangeBounds || !toolbar) {
        return null;
    }

    const minOffsetLeft = 5;
    const minOffsetRight = 5;
    const minOffsetTop = 5;

    const rangeWidth = rangeBounds.right - rangeBounds.left;
    const arrowStyle = {};

    let offsetLeft = rangeBounds.left - editorBounds.left + rangeWidth / 2;

    arrowStyle.left = "50%";

    // If closing left edge of screen
    if (offsetLeft - toolbarWidth / 2 + editorBounds.left < minOffsetLeft) {
        arrowStyle.left =
            rangeBounds.left + rangeBounds.width / 2 - arrowSize / 2;
        offsetLeft = toolbarWidth / 2 - editorBounds.left + minOffsetLeft;
    }

    // If closing right edge of screen
    if (
        offsetLeft + toolbarWidth / 2 + editorBounds.left >
        win.innerWidth - minOffsetRight
    ) {
        arrowStyle.left = "auto";
        arrowStyle.right =
            win.innerWidth -
            rangeBounds.right +
            rangeBounds.width / 2 -
            minOffsetRight -
            arrowSize / 2;
        offsetLeft =
            win.innerWidth -
            editorBounds.left -
            toolbarWidth / 2 -
            minOffsetRight;
    }

    let offsetTop =
        rangeBounds.top - editorBounds.top - (toolbarHeight + arrowSize);

    arrowStyle.top = "100%";
    if (offsetTop - minOffsetTop - toolbarHeight + editorBounds.top < 0) {
        if (rangeBounds.bottom && !Number.isNaN(rangeBounds.bottom)) {
            offsetTop = rangeBounds.bottom - editorBounds.top + arrowSize;
            arrowStyle.top = `-${arrowSize}px`;
            arrowStyle.transform = "rotate(180deg)";
        }
    }

    return { offsetLeft, offsetTop, arrowStyle };
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
                if(deleteKey){
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
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === type
            );
        }, callback);
    };
}

export function replaceOldBoldTag(html) {
    return html
        .replace(new RegExp("<b>", "g"), "<strong>")
        .replace(new RegExp("<b ", "g"), "<strong ")
        .replace(new RegExp("</b>", "g"), "</strong>");
}
