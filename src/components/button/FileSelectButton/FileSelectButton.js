import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./FileSelectButton.scss"
import Dropzone from "react-dropzone"
import { Button } from "../Button"


export const FileSelectButton = (props) => {
    const { onSelect, children, accept, className, busy, disabled, multiple } = props;

    /**
     * Callback when files are selected
     * @private
     */
    const handleFilesSelected = (acceptedFiles) => {
        onSelect && onSelect(acceptedFiles)
    };

    return (
        <Dropzone
            onDrop={handleFilesSelected}
            multiple={multiple}
            accept={accept}
            disableClick
            disabled={busy || disabled}>
            {({getRootProps, getInputProps, open}) => (
                <div className={classNames(styles.base, className)} {...getRootProps()}>
                    <input className={styles.input} {...getInputProps()} />
                    <Button
                        onClick={() => open()}
                        {...props}>
                        {children}
                    </Button>
                </div>
            )}
        </Dropzone>
    )
}


FileSelectButton.defaultProps = {
    accept: "image/*",
    multiple: false
};

FileSelectButton.propTypes = {

    /**
     * Select file callback
     */
    onSelect: PropTypes.func,

    /**
     * Accept MIME-types
     */
    accept: PropTypes.string,

    /**
     * Select multiple files
     */
    multiple: PropTypes.bool
};
