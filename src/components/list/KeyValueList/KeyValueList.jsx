import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export class KeyValueList extends React.Component {
    render(){

        // Properties
        const { horizontal } = this.props;

        return horizontal ? this._renderHorizontal() : this._renderVertical();
    }


    /**
     * Render:
     * VERTICAL VIEW
     * @returns {*}
     * @private
     */
    _renderVertical(){

        // Properties
        const { fluid, children } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, styles.vertical, {
            [styles.fluid]: fluid
        });

        return (
            <table className={baseClasses}>
                <tbody>
                    {children}
                </tbody>
            </table>
        )
    }


    /**
     * Render:
     * HORIZONTAL VIEW
     * @returns {*}
     * @private
     */
    _renderHorizontal(){

        // Properties
        const { fluid, children } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, styles.horizontal, {
            [styles.fluid]: fluid
        });

        return (
            <div className={baseClasses}>
                {children && React.Children.map(children, (row, index) => (
                    <div key={`kvitem-${index}`} className={styles.item}>
                        <div className={styles.label}>
                            {row.props.label}
                        </div>
                        <div className={styles.value}>
                            {row.props.children}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
