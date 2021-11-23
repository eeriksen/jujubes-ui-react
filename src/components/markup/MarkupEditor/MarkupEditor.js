import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import styles from "./MarkupEditor.scss";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import Immutable from "immutable";
import { blockRenderMap } from "./config";
import { replaceOldBoldTag } from "./utils";

import {
    Editor,
    EditorState,
    RichUtils,
    DefaultDraftBlockRenderMap,
    genKey,
    ContentBlock,
    SelectionState,
    convertToRaw,
    ContentState
} from "draft-js";

import { Toolbar } from "./Toolbar/Toolbar";
import { MarkupDisplay } from "./MarkupDisplay";
import decorators from "./decorators";
// import { Blockquote } from "./blocks/Blockquote/Blockquote";

const NO_RESET_STYLE_DEFAULT = ["ordered-list-item", "unordered-list-item"];
const initEditorState = (initialValue) => {
    if (initialValue && initialValue !== "") {
        const contentBlock = htmlToDraft(replaceOldBoldTag(initialValue));
        const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks,
            decorators
        );
        return EditorState.createWithContent(contentState, decorators);
    } else {
        return EditorState.createEmpty(decorators);
    }
};

export const MarkupEditor = ({
    value,
    onChange,
    placeholder,
    display,
    actions,
    excludeActions,
    place
}) => {
    const containerRef = useRef();
    const editorRef = useRef();
    const firstUpdate = useRef(true);
    const [editorState, setEditorState] = useState(initEditorState(value));
    const [editorHasFocus, setEditorHasFocus] = useState(false);

    useEffect(() => {
        if (!editorHasFocus && !firstUpdate.current) {
            setEditorState(initEditorState(value));
        }
    }, [value]);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            const updatedContentState = editorState.getCurrentContent();
            const editedValue = draftToHtml(convertToRaw(updatedContentState));
            onChange && onChange(editedValue);
        }
    }, [editorState.getCurrentContent()]);

    /**
     * Handle key commands in editor
     */
    const handleKeyCommand = (command, newEditorState) => {
        const newState = RichUtils.handleKeyCommand(newEditorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        } else {
            return "not-handled";
        }
    };

    /**
     * Handle pressing return key
     * @private
     */
    const handleReturnKey = (event) => {
        if (!event.shiftKey) {
            const selection = editorState.getSelection();
            const contentState = editorState.getCurrentContent();
            const currentBlock = contentState.getBlockForKey(selection.getEndKey());
            const endOffset = selection.getEndOffset();
            const atEndOfBlock = endOffset === currentBlock.getLength();
            const noReset = NO_RESET_STYLE_DEFAULT.includes(currentBlock.type);

            if (atEndOfBlock) {
                const blockType = noReset ? currentBlock.type : "unstyled";
                resetBlockStyle(editorState, selection, contentState, currentBlock, blockType);
                return true;
            } else {
                return false;
            }
        }

        const currentContent = editorState.getCurrentContent();
        const currentSelection = editorState.getSelection();
        const contentBlock = currentContent.getBlockMap().get(currentSelection.getFocusKey());
        const contentText = contentBlock.getText();

        if (
            contentText.charAt(currentSelection.focusOffset - 1) === "\n" ||
            contentText.charAt(currentSelection.focusOffset) === "\n"
        ) {
            return false;
        }

        const newState = RichUtils.insertSoftNewline(editorState);
        setEditorState(newState);
        return true;
    };

    /**
     * Break out of block style when pressing
     * return for certain block types
     *
     * Based on https://github.com/icelab/draft-js-block-breakout-plugin
     * @param newEditorState
     * @param selection
     * @param contentState
     * @param currentBlock
     * @param blockType
     * @private
     */
    const resetBlockStyle = (newEditorState, selection, contentState, currentBlock, blockType) => {
        const { List } = Immutable;
        const emptyBlockKey = genKey();

        const emptyBlock = new ContentBlock({
            key: emptyBlockKey,
            text: "",
            type: blockType,
            depth: 0,
            characterList: List(),
            inlineStyleRanges: []
        });

        const blockMap = contentState.getBlockMap();

        const blocksBefore = blockMap.toSeq().takeUntil(function (v) {
            return v === currentBlock;
        });
        const blocksAfter = blockMap
            .toSeq()
            .skipUntil(function (v) {
                return v === currentBlock;
            })
            .rest();

        const augmentedBlocks = [
            [currentBlock.getKey(), currentBlock],
            [emptyBlockKey, emptyBlock]
        ];

        const focusKey = emptyBlockKey;
        const newBlocks = blocksBefore.concat(augmentedBlocks, blocksAfter).toOrderedMap();
        const newContentState = contentState.merge({
            blockMap: newBlocks,
            selectionBefore: selection,
            selectionAfter: selection.merge({
                anchorKey: focusKey,
                anchorOffset: 0,
                focusKey: focusKey,
                focusOffset: 0,
                isBackward: false
            })
        });
        const noStyle = Immutable.OrderedSet([]);
        const resetState = EditorState.push(newEditorState, newContentState, "split-block");
        const emptySelection = SelectionState.createEmpty(emptyBlockKey);
        const editorSelected = EditorState.forceSelection(resetState, emptySelection);
        const noStyleState = EditorState.setInlineStyleOverride(editorSelected, noStyle);
        setEditorState(noStyleState);
    };

    /**
     * Assign styling to blocks
     * @param contentBlock
     * @private
     */
    const handleBlockStyling = (contentBlock) => {
        const type = contentBlock.getType();
        const blockAlignment = contentBlock.getData() && contentBlock.getData().get("text-align");

        return classNames({
            unstyled: type === "unstyled",
            [styles.blockAlignedRight]: blockAlignment === "right",
            [styles.blockAlignedCenter]: blockAlignment === "center"
        });
    };

    return (
        <div
            ref={containerRef}
            className={classNames(styles.base, {
                [styles.hasFocus]: editorHasFocus,
                [styles.placeInline]: place === "inline"
            })}
            onBlur={() => setEditorHasFocus(false)}
            onFocus={() => setEditorHasFocus(true)}
            onDoubleClick={(e) => e.stopPropagation()}
        >
            {/* Toolbar */}
            <Toolbar
                place={place}
                actions={actions}
                excludeActions={excludeActions}
                editorState={editorState}
                editorHasFocus={editorHasFocus}
                containerRef={containerRef}
                onChange={setEditorState}
            />

            {/* Editor */}
            <div className={styles.editor}>
                {React.cloneElement(
                    display,
                    display.props,
                    <Editor
                        ref={editorRef}
                        placeholder={placeholder}
                        editorState={editorState}
                        onChange={setEditorState}
                        handleKeyCommand={handleKeyCommand}
                        handleReturn={handleReturnKey}
                        blockStyleFn={handleBlockStyling}
                        blockRenderMap={DefaultDraftBlockRenderMap.merge(blockRenderMap)}
                        // blockRendererFn={(contentBlock) => {
                        //     if (contentBlock.getType() === "blockquote") {
                        //         return {
                        //             component: Blockquote,
                        //             editable: false,
                        //             props: {
                        //                 editorState,
                        //                 setEditorState
                        //             }
                        //         };
                        //     }
                        // }}
                    />
                )}
            </div>
        </div>
    );
};

MarkupEditor.defaultProps = {
    placeholder: "Start typing here...",
    display: <MarkupDisplay />,
    actions: [
        ["H1", "H2", "H3", "H4"],
        ["bold", "italic", "underline", "strikethrough"],
        ["align-left", "align-center", "align-right"],
        ["blockquote", "unordered-list", "ordered-list", "link"]
    ],
    excludeActions: []
};

MarkupEditor.propTypes = {
    /**
     * The HTML content as a string.
     */
    value: PropTypes.string,
    /**
     * Callback function when the content is changed.
     */
    onChange: PropTypes.func,
    /**
     * The message displayed when no content.
     */
    placeholder: PropTypes.string,
    /**
     * A react element that styles the markup.
     */
    display: PropTypes.any,
    /**
     * Defines the actions available on the toolbar.
     */
    actions: PropTypes.array,
    /**
     * Set toolbar actions to exclude.
     */
    excludeActions: PropTypes.array,

    /**
     * Toolbar placement: null or "inline"
     */
    place: PropTypes.string
};
