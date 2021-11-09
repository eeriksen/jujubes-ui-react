import React, { useRef, useState, useEffect } from "react";
import styles from "./ImageEditor.scss";
import "tui-image-editor/dist/tui-image-editor.css";
import { Button } from "../../button/Button";
import { FileSelectButton } from "../../button/FileSelectButton";
import { Popup, PopupTitle } from "../../notify/Popup";
import { CROP_MODE, FOCUS_POINT_MODE, language } from "./constants";
import { ButtonGroup } from "../../button/ButtonGroup";
import { base64ToBlob } from "./utils";
import { CropTools } from "./CropTools";
import { Toolbar } from "../../navigation/Toolbar";

export const ImageEditor = ({
    file,
    url,
    title,
    focusPoint,
    onFocusPointChange,
    onClose,
    onSave,
    initCrop
}) => {
    const frameRef = useRef();
    const editorElement = useRef(null);
    const [image, setImage] = useState(null);
    const [imageEditor, setImageEditor] = useState(null);
    const [activeMode, setActiveMode] = useState(null);
    const [undoStackSize, setUndoStackSize] = useState(0);
    const [redoStackSize, setRedoStackSize] = useState(0);
    const [ToastEditor, setToastEditor] = useState(null);
    const stateRef = useRef({ onFocusPointChange });
    const [focusPointPosition, setFocusPointPosition] = useState(null);

    import("@toast-ui/react-image-editor").then(({ default: comp }) => {
        setToastEditor(() => comp);
    });

    useEffect(() => {
        stateRef.current = {
            ...stateRef.current,
            activeMode,
            onFocusPointChange,
            imageEditor
        };
    }, [activeMode, imageEditor]);

    // Set image editor reference
    useEffect(() => {
        if (ToastEditor) {
            setImageEditor(editorElement.current.getInstance());
        }
    }, [editorElement, ToastEditor]);

    useEffect(() => {
        drawFocusPoint();
    }, [focusPoint, undoStackSize, redoStackSize]);

    // Bind editor events and init crop
    useEffect(() => {
        if (imageEditor) {
            imageEditor.on({
                undoStackChanged: (length) => {
                    setUndoStackSize(length);
                },
                redoStackChanged: (length) => {
                    setRedoStackSize(length);
                },
                mousedown: handleFocusPointClick
            });

            // Init crop
            if (initCrop && imageEditor && image) {
                startCrop();
                setTimeout(() => {
                    setCropZone(initCrop);
                }, 500);
            }
        }
    }, [imageEditor]);

    const handleFocusPointClick = (event, point) => {
        const state = stateRef.current;
        if (state.activeMode === FOCUS_POINT_MODE && onFocusPointChange) {
            const canvasSize = imageEditor.getCanvasSize();
            const focusPointX = Math.round((point.x / canvasSize.width) * 100);
            const focusPointY = Math.round((point.y / canvasSize.height) * 100);
            onFocusPointChange({
                x: focusPointX,
                y: focusPointY
            });
            stopFocusPoint();
        }
    };

    const handleResetFocusPoint = () => {
        onFocusPointChange(null);
        setFocusPointPosition(null);
        stopFocusPoint();
    };

    const drawFocusPoint = () => {
        if (focusPoint && imageEditor && undoStackSize > 0) {
            const frameSize = frameRef.current.getBoundingClientRect();
            const canvasSize = imageEditor._graphics._canvas.wrapperEl.getBoundingClientRect();
            const leftOffset = (frameSize.width - canvasSize.width) / 2;
            const rightOffset = (frameSize.height - canvasSize.height) / 2;
            const pointLeft = leftOffset + canvasSize.width * (focusPoint.x / 100);
            const pointRight = rightOffset + canvasSize.height * (focusPoint.y / 100);
            setFocusPointPosition({
                left: pointLeft,
                top: pointRight
            });
        } else {
            setFocusPointPosition(null);
        }
    };

    // Load image from File
    useEffect(() => {
        if (file && imageEditor) {
            loadImageFromFile(file);
        }
    }, [file, imageEditor]);

    // Load image from URL
    useEffect(() => {
        if (url && imageEditor) {
            loadImageFromURL(url);
        }
    }, [url, imageEditor]);

    const loadImageFromFile = (imageFile) => {
        imageEditor.loadImageFromFile(imageFile).then(() => {
            setImage({
                name: imageFile.name,
                type: imageFile.type.substring(imageFile.type.indexOf("/") + 1).toLowerCase()
            });
        });
    };

    const loadImageFromURL = (imageUrl) => {
        imageEditor.loadImageFromURL(imageUrl, "image").then(() => {
            let typeMatch = imageUrl.toLowerCase().match(/i?\.(jpg|jpeg|png|gif)/);
            let type = typeMatch && typeMatch.length > 1 ? typeMatch[1] : "png";
            setImage({
                name: `image-${Math.floor(Math.random() * 1000)}.${type}`,
                type: type
            });
        });
    };

    const cancelMode = () => {
        imageEditor.stopDrawingMode();
        setActiveMode(null);
    };
    const undoAction = () => {
        cancelMode();
        imageEditor.undo();
    };
    const redoAction = () => {
        cancelMode();
        imageEditor.redo();
    };

    /**
     * Action:
     * CROPPING
     */
    const startCrop = () => {
        imageEditor.startDrawingMode("CROPPER");
        setActiveMode(CROP_MODE);
    };
    const setCropZone = (number) => {
        imageEditor.setCropzoneRect(number);
    };
    const applyCrop = () => {
        const cropRect = imageEditor.getCropzoneRect();
        if (cropRect.width < 1 || cropRect.height < 1) {
            imageEditor.stopDrawingMode();
            setActiveMode(null);
        } else {
            imageEditor.crop(imageEditor.getCropzoneRect()).then(function () {
                imageEditor.stopDrawingMode();
                setActiveMode(null);
                drawFocusPoint();
            });
        }
    };

    /**
     * Action:
     * ROTATE
     */
    const rotateLeft = () => {
        cancelMode();
        imageEditor.rotate(-90);
    };
    const rotateRight = () => {
        cancelMode();
        imageEditor.rotate(90);
    };

    /**
     * Action:
     * FOCUS POINT
     */
    const startFocusPoint = () => {
        imageEditor.changeCursor("crosshair");
        setActiveMode(FOCUS_POINT_MODE);
    };
    const stopFocusPoint = () => {
        imageEditor.changeCursor("default");
        setActiveMode(null);
    };

    /**
     * Save edited image
     */
    const saveImage = () => {
        const dataURL = imageEditor.toDataURL({
            format: image.type
        });

        if (!(window.File && window.FileList && window.FileReader)) {
            alert("Not supported in this browser.");
        }

        const blob = base64ToBlob(dataURL);
        const editedFile = new File([blob], image.name, {
            type: `image/${image.type === "jpg" ? "jpeg" : image.type}`
        });
        editedFile.preview = URL.createObjectURL(editedFile);
        onSave(editedFile);
    };

    return (
        <Popup size="full" onClose={onClose}>
            <PopupTitle>{title || language.title}</PopupTitle>
            <div className={styles.base}>

                {/* PRIMARY TOOLS */}
                <div className={styles.primaryTools}>
                    <Toolbar>
                        <Toolbar.Item divideRight>
                            <ButtonGroup>
                                <Button
                                    square
                                    title={language.crop}
                                    icon="crop"
                                    size="small"
                                    active={activeMode === CROP_MODE}
                                    onClick={startCrop}
                                    disabled={!image}
                                />
                                <Button
                                    square
                                    title={language.rotateLeft}
                                    icon="rotate-left"
                                    size="small"
                                    onClick={rotateLeft}
                                    disabled={!image}
                                />
                                <Button
                                    square
                                    title={language.rotateRight}
                                    icon="rotate-right"
                                    size="small"
                                    onClick={rotateRight}
                                    disabled={!image}
                                />
                            </ButtonGroup>
                        </Toolbar.Item>
                        <Toolbar.Item divideRight>
                            <ButtonGroup>
                                <Button
                                    title={language.undo}
                                    square
                                    icon="undo"
                                    size="small"
                                    disabled={undoStackSize < 1}
                                    onClick={undoAction}
                                />
                                <Button
                                    title={language.redo}
                                    square
                                    icon="redo"
                                    size="small"
                                    disabled={redoStackSize < 1}
                                    onClick={redoAction}
                                />
                            </ButtonGroup>
                        </Toolbar.Item>
                        <Toolbar.Item grow>
                            {onFocusPointChange ? (
                                <ButtonGroup>
                                    <Button
                                        title={language.focusPoint}
                                        square
                                        icon="target"
                                        size="small"
                                        active={activeMode === FOCUS_POINT_MODE}
                                        disabled={undoStackSize < 1}
                                        onClick={
                                            activeMode === FOCUS_POINT_MODE
                                                ? stopFocusPoint
                                                : startFocusPoint
                                        }
                                    />
                                    {activeMode === FOCUS_POINT_MODE ? (
                                        <Button
                                            icon="close"
                                            iconColor="error"
                                            size="small"
                                            onClick={handleResetFocusPoint}
                                        >
                                            Fjern
                                        </Button>
                                    ) : null}
                                </ButtonGroup>
                            ) : null}
                        </Toolbar.Item>
                        <Toolbar.Item divideLeft>
                            <FileSelectButton
                                title={language.loadImage}
                                icon="download"
                                iconColor="primary"
                                size="small"
                                onSelect={(files) =>
                                    files && files.length && loadImageFromFile(files[0])
                                }
                                responsive
                            >
                                {language.loadImage}
                            </FileSelectButton>
                        </Toolbar.Item>
                        <Toolbar.Item divideLeft>
                            <Button
                                title={language.saveImage}
                                icon="save"
                                iconColor="success"
                                size="small"
                                onClick={saveImage}
                                disabled={!image || !onSave}
                                responsive
                            >
                                {language.saveImage}
                            </Button>
                        </Toolbar.Item>
                    </Toolbar>
                </div>

                {/* SECONDARY TOOLS */}
                {activeMode ? (
                    <div className={styles.secondaryTools}>
                        {activeMode === CROP_MODE ? (
                            <CropTools
                                onApply={applyCrop}
                                onCancel={cancelMode}
                                setCropZone={setCropZone}
                            />
                        ) : null}
                    </div>
                ) : null}

                {/* EDITOR FRAME */}
                {ToastEditor ? (
                    <div className={styles.frame} ref={frameRef}>
                        <ToastEditor
                            ref={editorElement}
                            selectionStyle={{
                                cornerSize: 20,
                                rotatingPointOffset: 70
                            }}
                            usageStatistics={false}
                        />

                        {/* Focus point */}
                        {focusPoint && focusPointPosition ? (
                            <div
                                className={styles.focusPoint}
                                style={{
                                    left: `${focusPointPosition.left}px`,
                                    top: `${focusPointPosition.top}px`
                                }}
                            />
                        ) : null}
                    </div>
                ) : null}
            </div>
            {/* <WindowResizeListener onResize={drawFocusPoint} /> */}
        </Popup>
    );
};
