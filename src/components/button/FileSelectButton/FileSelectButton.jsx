import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

import Dropzone from "react-dropzone"
import Button from "../Button"
import LoaderHorizontal from "../../loader/LoaderHorizontal"


const fileTypeMimes = {
    images:         "image/*",
    videos:         "video/*",
    audio:          "audio/*",
    text:           "text/*"
};


export default class FileSelectButton extends React.Component {

    /**
     * Open file selector
     * @private
     */
    _openFileSelector = () => {
        this.dropzone.open();
    };

    /**
     * Callback when files are selected
     * @private
     */
    _handleFilesSelected = (acceptedFiles) => {

        // Callback
        if(this.props.onSelect){
            this.props.onSelect(acceptedFiles);
        }

    };


    /**
     * RENDER
     * @returns {XML}
     */
    render(){

        // Properties
        const { children, accept, className, busy, disabled, multiple } = this.props;

        // Accept file types
        let acceptTypes = null;
        if(accept){
            acceptTypes = "";
            const acceptArray = accept.split(",");
            acceptArray.map((typeName) => {
                const type = fileTypeMimes[typeName];
                if(type){
                    acceptTypes += type+","
                }
                return typeName;
            });
            acceptTypes = acceptTypes.slice(0, -1);
        }

        // Classes
        const classes = classNames(styles.base, className);

        return (
            <Button onClick={this._openFileSelector} className={classes} disabled={busy || disabled} hideIcon={busy} hideLabel={busy} {...this.props}>

                {busy ? (
                    <div className={styles.loader}>
                        <LoaderHorizontal />
                    </div>
                ) : null}

                {children}

                <Dropzone
                    className={styles.dropzone}
                    ref={(node) => { this.dropzone = node; }}
                    onDrop={this._handleFilesSelected}
                    multiple={multiple}
                    accept={acceptTypes}
                    disabled={busy || disabled}
                />
            </Button>
        )
    }
}



FileSelectButton.propTypes = {
    accept: PropTypes.string,
    busy: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool
};

FileSelectButton.defaultProps = {
    accept: "images",
    busy: false,
    disabled: false,
    multiple: false
};
