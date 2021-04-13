import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ItemList.scss";
import { SortableContainer } from "react-sortable-hoc";
import { Spinner } from "../../loader/Spinner";
import { Text } from "../../typography/Text";

export const ItemList = ({ onItemClick, onSort, busy, children, className, emptyMessage }) => {
    /**
     * Handle item dropped when sorting
     * @param oldIndex
     * @param newIndex
     * @private
     */
    const handleSortEnd = (data) => {
        if (onSort && data.oldIndex !== data.newIndex) {
            onSort(data);
        }
    };

    return (
        <div
            className={classNames(styles.base, {
                [styles.hidden]: !emptyMessage && !children
            })}
        >
            {/* Loader */}
            {busy ? (
                <div className={styles.loader}>
                    <Spinner className={styles.spinner} />
                </div>
            ) : null}

            {/* Items */}
            <SortableItemList
                items={children}
                className={className}
                sortable={typeof onSort !== "undefined"}
                onItemClick={onItemClick}
                onSortEnd={handleSortEnd}
                helperClass={styles.isDragged}
                useDragHandle={typeof onSort !== "undefined"}
                pressDelay={200}
            />

            {/* No items */}
            {!children ? (
                <div className={styles.item}>
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            <Text opacity={40}>{emptyMessage || "Tom liste."}</Text>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

// Item list
const SortableItemList = SortableContainer(({ className, items, sortable, onItemClick }) => (
    <div className={classNames(styles.list, className)}>
        {items &&
            React.Children.map(items, (child, index) =>
                React.cloneElement(child, {
                    onClick: onItemClick,
                    sortable: sortable
                })
            )}
    </div>
));

ItemList.propTypes = {
    /**
     * Item click callback function
     */
    onItemClick: PropTypes.func,

    /**
     * Item sort callback (enables sorting and displays handle)
     */
    onSort: PropTypes.func,

    /**
     * Show loading indicator on top of items
     */
    busy: PropTypes.bool,

    /**
     * Content to show when list is empty
     */
    emptyMessage: PropTypes.any
};

ItemList.defaultProps = {
    busy: false
};
