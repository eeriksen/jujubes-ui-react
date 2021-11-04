import React from "react";
// import styles from "./EmojiPicker.scss";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart/dist-es/index.js";
import i18n from "./i18n";

export const EmojiPicker = (props) => {
    const lang = i18n[navigator.language];
    return <Picker {...props} i18n={lang} title={lang ? lang.title : "Emojis"} set="apple" />;
};

EmojiPicker.defaultProps = {
    emoji: "blush",
    style: {
        border: "none"
    }
};
