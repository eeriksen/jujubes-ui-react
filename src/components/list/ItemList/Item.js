import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.scss";
import { SortableElement, SortableHandle } from "react-sortable-hoc";

import { Clickable } from "../../button/Clickable/Clickable";
import { Icon } from "../../graphic/Icon";

const SortableItem = SortableElement(({ children }) => children);
const DragHandle = SortableHandle(() => (
    <div className={styles.handle} onClick={(e) => e.stopPropagation()}>
        <Icon className={styles.icon} name="dot-matrix" />
    </div>
));

export const Item = ({ index, value, prepend, append, onClick, sortable, children }) => {
    const handleClick = () => {
        onClick && onClick(value);
    };

    return (
        <SortableItem index={index}>
            <Clickable
                className={classNames(styles.item, {
                    [styles.clickable]: onClick
                })}
                onClick={handleClick}
            >
                {/* Prepend */}
                {prepend ? (
                    <div className={styles.prepend}>
                        <div className={styles.wrapper}>{prepend}</div>
                    </div>
                ) : null}

                {/* Content */}
                <div className={styles.content}>
                    <div className={styles.wrapper}>{children}</div>
                </div>

                {/* Append */}
                {append ? (
                    <div className={styles.append}>
                        <div className={styles.wrapper}>{append}</div>
                    </div>
                ) : null}

                {/* Drag handle */}
                {sortable ? <DragHandle /> : null}
            </Clickable>
        </SortableItem>
    );
};

Item.propTypes = {
    /**
     * Index number indicating item order
     */
    index: PropTypes.number,

    /**
     * The value to return in onItemClick callback
     */
    value: PropTypes.any,

    /**
     * Add element at start of item
     */
    prepend: PropTypes.object,

    /**
     * Add element to end of item
     */
    append: PropTypes.object,

    /**
     * The content to be displayed in item
     */
    children: PropTypes.any
};
