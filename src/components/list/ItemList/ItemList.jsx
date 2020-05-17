import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc"

import { Clickable } from "../../button/Clickable/Clickable.jsx"
import { Icon } from "../../graphic/Icon"
import { Spinner } from "../../loader/Spinner"
import { Text } from "../../typography/Text"

export class ItemList extends React.Component {

    /**
     * Handle item dropped when sorting
     * @param oldIndex
     * @param newIndex
     * @private
     */
    _handleSortEnd = (data) => {
        if (this.props.onSort && data.oldIndex !== data.newIndex) {
            this.props.onSort(data);
        }
    };


    /**
     * RENDER
     * @returns {XML}
     */
    render() {

        // Properties
        const {onItemClick, onSort, busy, hideIfEmpty, children, className, emptyMessage} = this.props;

        // Base classes
        const baseClasses = classNames(styles.base, {
            [styles.hidden]: hideIfEmpty && (!children || !children.length)
        });

        // List classes
        const listClasses = classNames(styles.list, className);

        // Item classes
        const itemClasses = classNames(styles.item, {
            [styles.clickable]: onItemClick
        });

        // Sortable
        const sortable = typeof onSort !== "undefined";

        // Items
        let items = children;
        if (children && children.constructor !== Array) {
            items = [];
            items.push(children);
        }


        // Draggable handle
        const DragHandle = SortableHandle(() => (
            <div className={styles.handle}>
                <Icon className={styles.icon} name="dot-matrix"/>
            </div>
        ));

        // Sortable item
        const SortableItem = SortableElement(({item}) =>
            <Clickable
                className={itemClasses}
                style={item.props.style}
                onClick={item.props.onClick ? item.props.onClick : (onItemClick ? () => onItemClick(item.props.value) : null)}>

                {/* Prepend */}
                {item.props.prepend ? (
                    <div className={styles.prepend}>
                        <div className={styles.wrapper}>
                            {item.props.prepend}
                        </div>
                    </div>
                ) : null}

                {/* Content */}
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        {item}
                    </div>
                </div>

                {/* Append */}
                {item.props.append ? (
                    <div className={styles.append}>
                        <div className={styles.wrapper}>
                            {item.props.append}
                        </div>
                    </div>
                ) : null}

                {/* Drag handle */}
                {sortable ? <DragHandle/> : null}

            </Clickable>
        );


        // Item list
        const SortableItemList = SortableContainer(() => (
            <div className={listClasses}>

                {/* Loader */}
                {busy ? (
                    <div className={styles.loader}>
                        <Spinner className={styles.spinner}/>
                    </div>
                ) : null}

                {/* Items */}
                {items && items.map((item, index) => (
                    <SortableItem key={index} index={index} item={item} disabled={!sortable}/>
                ))}

                {/* No items */}
                {!items || !items.length ? (
                    <div className={styles.item}>
                        <div className={styles.content}>
                            <div className={styles.wrapper}>
                                <Text base40>
                                    {emptyMessage || 'Tom liste.'}
                                </Text>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        ));

        return (
            <div className={baseClasses}>
                <SortableItemList onSortEnd={this._handleSortEnd} helperClass={styles.isDragged} useDragHandle={sortable}
                                  pressDelay={200}/>
            </div>
        )

    }
}
