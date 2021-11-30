import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Textarea.scss";
import { Toolbar } from "../../navigation/Toolbar";
import { PopOver } from "../../navigation/PopOver";
import { Button } from "../../button/Button";
import { EmojiPicker, Emoji } from "../EmojiPicker";
import { Text } from "../../typography/Text";

export const Textarea = ({
    value,
    onChange,
    maxLength,
    placeholder,
    error,
    className,
    disabled,
    rows,
    emojis,
    counter
}) => {
    const [showToolbar, setShowToolbar] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [focused, setFocused] = useState(false);
    const textareaRef = useRef();

    useEffect(() => {
        setShowToolbar(emojis || counter);
    }, [emojis, counter]);

    const handleChange = (e) => {
        let value = e.target.value;
        // Check if exceeding max length
        if (maxLength && value && value.length > maxLength) {
            value = value.slice(0, maxLength);
        }

        onChange && onChange(value);
    };

    const handlePickEmoji = (emoji) => {
        // Variables
        let firstValue, lastValue;

        // Find textarea
        const $textarea = textareaRef.current;

        // Slice text based on caret-position
        firstValue = value !== null ? value.slice(0, $textarea.selectionStart) : "";
        lastValue = value !== null ? value.slice($textarea.selectionEnd, value.length) : "";

        // Set new text
        const newValue = firstValue + emoji.native + lastValue;

        // Get position of caret before emoticon, and add number of chars the emoticon builds in string
        const caretPosition = $textarea.selectionStart + emoji.native.length;

        // Create event
        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            "value"
        ).set;
        nativeTextAreaValueSetter.call($textarea, newValue);

        // Dispatch event
        const ev2 = new Event("input", { bubbles: true });
        $textarea.dispatchEvent(ev2);

        // Reset focus to after emoticon
        $textarea.focus();
        $textarea.selectionStart = caretPosition;
        $textarea.selectionEnd = caretPosition;
    };

    return (
        <div
            className={classNames(
                styles.base,
                {
                    [styles.error]: error,
                    [styles.toolbar]: showToolbar,
                    [styles.disabled]: disabled,
                    [styles.focused]: focused
                },
                className
            )}
        >
            <textarea
                ref={textareaRef}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                rows={rows}
                value={value || ""}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            ></textarea>

            {showToolbar ? (
                <div className={styles.toolbar}>
                    <Toolbar>
                        {emojis ? (
                            <Toolbar.Item>
                                <PopOver
                                    visible={showEmojiPicker}
                                    position="bottom"
                                    onClose={() => setShowEmojiPicker(false)}
                                    content={<EmojiPicker onSelect={handlePickEmoji} />}
                                    size="auto"
                                >
                                    <Button
                                        square
                                        size="small"
                                        color="transparent"
                                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                        disabled={disabled}
                                    >
                                        <Emoji emoji="blush" size={22} />
                                    </Button>
                                </PopOver>
                            </Toolbar.Item>
                        ) : null}
                        <Toolbar.Item grow />
                        {counter ? (
                            <Toolbar.Item>
                                <Text
                                    weight="medium"
                                    color={value && value.length >= maxLength ? "error" : null}
                                >
                                    {value ? value.length : 0}
                                </Text>
                                <Text opacity={50}>&nbsp;/&nbsp;{maxLength}</Text>
                                &nbsp;&nbsp;
                            </Toolbar.Item>
                        ) : null}
                    </Toolbar>
                </div>
            ) : null}
        </div>
    );
};

Textarea.defaultProps = {
    maxLength: 2000,
    rows: 3
};

Textarea.propTypes = {
    /**
     * Field value
     */
    value: PropTypes.string,

    /**
     * Change handler
     */
    onChange: PropTypes.func,

    /**
     * Number of visible rows
     */
    rows: PropTypes.number,

    /**
     * Max number of characters
     */
    maxLength: PropTypes.number,

    /**
     * Placeholder text
     */
    placeholder: PropTypes.string,

    /**
     * Visually show field error
     */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * Disabled field
     */
    disabled: PropTypes.bool,

    /**
     * Custom class name
     */
    className: PropTypes.string
};
