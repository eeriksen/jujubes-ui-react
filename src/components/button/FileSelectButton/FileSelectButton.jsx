import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

import Dropzone from "react-dropzone"
import { Button } from "../Button"

const fileTypeMimes = {
    images:         "image/*",
    videos:         "video/*",
    audio:          "audio/*",
    text:           "text/*"
};


export class FileSelectButton extends React.Component {

    /**
     * Callback when files are selected
     * @private
     */
    _handleFilesSelected = (acceptedFiles) => {

        console.log("FILES", acceptedFiles);

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
            <Dropzone
                onDrop={this._handleFilesSelected}
                multiple={multiple}
                accept={acceptTypes}
                disableClick
                disabled={busy || disabled}>
                {({getRootProps, getInputProps, open}) => (
                    <div className={classes} {...getRootProps()}>
                        <input className={styles.input} {...getInputProps()} />
                        <Button
                            onClick={() => open()}
                            busy={busy}
                            {...this.props}>
                            {children}
                        </Button>
                    </div>
                )}
            </Dropzone>
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
