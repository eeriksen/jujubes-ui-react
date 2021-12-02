import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Toolbar.scss";

import { getVisibleSelectionRect } from "draft-js";
import { calculatePosition } from "../../../../utils/popOverUtils";
import { findParentWithCSS } from "../../../../utils/domUtils";

import { getToolbarWidth } from "../utils";
import { ToolbarItemGroup } from "./ToolbarItemGroup";

import { BlockTypeAction } from "./actions/BlockTypeAction";
import { BlockStyleAction } from "./actions/BlockStyleAction";
import { InlineStyleAction } from "./actions/InlineStyleAction";
import { EntityAction } from "./actions/EntityAction";
import { LinkType } from "./entities/LinkType";
import { Arrow } from "../../../graphic";

export const Toolbar = ({
    editorHasFocus,
    editorState,
    containerRef,
    onChange,
    actions,
    excludeActions,
    place,
    size
}) => {
    let updatePositionTimeout;
    const toolbarRef = useRef();
    const [visible, setVisible] = useState(false);
    const [toolbarStyle, setToolbarStyle] = useState({
        top: 0,
        left: 0
    });
    const [arrowStyle, setArrowStyle] = useState(null);
    const [editingEntity, setEditingEntity] = useState(null);

    const toolbarActionMap = {
        H1: {
            icon: "h1",
            blockType: "header-one"
        },
        H2: {
            icon: "h2",
            blockType: "header-two"
        },
        H3: {
            icon: "h3",
            blockType: "header-three"
        },
        H4: {
            icon: "h4",
            blockType: "header-four"
        },
        bold: {
            icon: "bold",
            inlineStyle: "BOLD"
        },
        italic: {
            icon: "italic",
            inlineStyle: "ITALIC"
        },
        underline: {
            icon: "underline",
            inlineStyle: "UNDERLINE"
        },
        strikethrough: {
            icon: "strikethrough",
            inlineStyle: "STRIKETHROUGH"
        },
        "align-left": {
            icon: "align-left",
            blockStyle: { "text-align": null }
        },
        "align-center": {
            icon: "align-center",
            blockStyle: { "text-align": "center" }
        },
        "align-right": {
            icon: "align-right",
            blockStyle: { "text-align": "right" }
        },
        blockquote: {
            icon: "quote",
            blockType: "blockquote"
        },
        "unordered-list": {
            icon: "list",
            blockType: "unordered-list-item"
        },
        "ordered-list": {
            icon: "ordered-list",
            blockType: "ordered-list-item"
        },
        link: {
            icon: "link",
            entityType: "LINK",
            onSetEntity: setEditingEntity,
            component: LinkType
        }
    };

    useEffect(() => {
        if (place !== "inline") {
            const { element: scrollParent } =
                findParentWithCSS(containerRef.current, "overflow-y", "auto") || document;
            scrollParent.addEventListener("scroll", handleScroll);
            return () => {
                scrollParent.removeEventListener("scroll", handleScroll);
            };
        }
    }, [place]);

    const handleScroll = () => {
        handleUpdateToolbarPosition();
    };

    useEffect(() => {
        const shouldDisplayToolbar =
            (editorHasFocus || editingEntity) && !editorState.getSelection().isCollapsed();
        setVisible(shouldDisplayToolbar);
        if (shouldDisplayToolbar && place !== "inline") {
            handleUpdateToolbarPosition();
        } else {
            setEditingEntity(null);
        }
    }, [editorHasFocus, editorState, editingEntity]);

    /**
     * Update the toolbar position
     * @private
     */
    const handleUpdateToolbarPosition = () => {
        clearTimeout(updatePositionTimeout);
        updatePositionTimeout = setTimeout(() => {
            // Calculate toolbar width
            const toolbarWidth = getToolbarWidth(toolbarRef.current, styles.group);
            setToolbarStyle({
                ...toolbarStyle,
                width: `${toolbarWidth}px`
            });

            // Calculate toolbar position
            const win = containerRef.current.ownerDocument.defaultView || window;
            const selectionBounds = getVisibleSelectionRect(win);

            const { popStyle, arrowStyle } = calculatePosition({
                $base: selectionBounds,
                $pop: toolbarRef.current
            });

            setToolbarStyle(popStyle);
            setArrowStyle(arrowStyle);
        }, 0);
    };

    return (
        <div
            ref={toolbarRef}
            className={classNames(styles.toolbar, {
                [styles.visible]: visible,
                [styles.placeInline]: place === "inline",
                [styles.sizeSmall]: size === "small"
            })}
            style={toolbarStyle}
            onMouseDown={(e) => {
                const tagName = e.target.tagName.toUpperCase();
                if (tagName !== "INPUT") {
                    e.preventDefault();
                }
            }}
        >
            <div className={styles.wrapper}>
                {/* Arrow */}
                <Arrow className={styles.arrow} style={arrowStyle} />

                {/* Content */}
                <div className={styles.content}>
                    {editingEntity
                        ? editingEntity
                        : actions &&
                          actions.map((groupActions, index) => (
                              <ToolbarItemGroup key={index}>
                                  {groupActions.map((actionKey) => {
                                      // Check if action
                                      if (!toolbarActionMap.hasOwnProperty(actionKey)) {
                                          console.warn(
                                              "MarkupEditor: No such action: %s",
                                              actionKey
                                          );
                                          return null;
                                      }

                                      const action = toolbarActionMap[actionKey];
                                      let elementType;
                                      if (action.hasOwnProperty("blockType")) {
                                          elementType = BlockTypeAction;
                                      } else if (action.hasOwnProperty("inlineStyle")) {
                                          elementType = InlineStyleAction;
                                      } else if (action.hasOwnProperty("blockStyle")) {
                                          elementType = BlockStyleAction;
                                      } else if (action.hasOwnProperty("entityType")) {
                                          elementType = EntityAction;
                                      }

                                      return React.createElement(elementType, {
                                          key: actionKey,
                                          editorState: editorState,
                                          onChange: onChange,
                                          disabled: excludeActions.indexOf(actionKey) >= 0,
                                          ...action
                                      });
                                  })}
                              </ToolbarItemGroup>
                          ))}
                </div>
            </div>
        </div>
    );
};
