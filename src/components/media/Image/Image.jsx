import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import Dropzone from "react-dropzone"

import Icon from "../../graphic/Icon"
import Spinner from "../../loader/Spinner"
import Clickable from "../../button/Clickable"

export default class Image extends React.Component {

    /**
     *  Handle click action
     */
    _onClick = () => {
        if(this.props.onClick){
            this.props.onClick();
        }else if(this.props.onFileSelect){
            this.dropzone.open();
        }
    };


    /**
     * Handle file select
     */
    _handleFileSelect = (files) => {
        this.props.onFileSelect(files[0]);
    };


    /**
     * Handle remove
     */
    _handleRemove = (e) => {
        e.stopPropagation();
        if(this.props.onRemove){
            this.props.onRemove();
        }
    };


    render(){

        // Props
        const {
            src, busy, thumbnail, scale, mod,
            placeholder, onClick, onFileSelect, actions,
            alt
        } = this.props;

        // Check if source
        const imageHasSource = src !== null && src;

        // Classes
        const classes = classNames(styles.base, {

            // Sizes
            [styles.thumbnail]: thumbnail,
            [styles.thumbSmall]: thumbnail === 'small',
            [styles.thumbRegular]: thumbnail === 'regular',
            [styles.thumbMedium]: thumbnail === 'medium',
            [styles.thumbLarge]: thumbnail === 'large',

            // Scales
            [styles.scaleFill]: scale === 'fill',
            [styles.scaleSquare]: scale === 'square',
            [styles.scaleA16_9]: scale === '16:9',

            // Mods
            [styles.modRounded]: mod && mod.indexOf("rounded") >= 0,
            [styles.modOval]: mod && mod.indexOf("oval") >= 0,
            [styles.modGray]: mod && mod.indexOf("gray") >= 0,

            // Clickable
            [styles.isClickable]: onClick || onFileSelect,

            // Busy
            [styles.isBusy]: busy

        }, this.props.className);


        // Image styles
        const imageStyles = thumbnail || scale ? {
            "backgroundImage": `url(${src})`
        } : null;


        return (
            <div className={classes} onClick={this._onClick}>

                {/* Actions */}
                {actions ? (
                    <div className={styles.actions}>
                        {actions}
                    </div>
                ) : null}

                {/* Wrapper */}
                <div className={styles.wrapper}>

                    {/* Loader */}
                    {busy ? (
                        <div className={styles.busy}>
                            <Spinner className={styles.spinner} />
                        </div>
                    ) : null}

                    {/* Image / Placeholder */}
                    {imageHasSource ? (
                        <div className={styles.image} style={imageStyles}>
                            {!imageStyles ? (
                                <img alt={alt} src={src} />
                            ) : null}
                        </div>
                    ) : (
                        <div className={classNames(styles.placeholder, {
                            [styles.default]: !placeholder
                        })}>
                            {placeholder || <Icon name="image" />}
                        </div>
                    )}

                </div>

                {/* File select dropzone */}
                {onFileSelect ? (
                    <Dropzone
                        onDrop={this._handleFileSelect}
                        ref={(node) => { this.dropzone = node; }}
                        multiple={false}
                        accept={"image/*"}
                        disableClick
                        disabled={busy}>
                        {({getRootProps, getInputProps, open}) => (
                            <div className={classes} {...getRootProps()}>
                                <input className={styles.input} {...getInputProps()} />
                            </div>
                        )}
                    </Dropzone>
                ) : null}

            </div>
        )
    }
}
