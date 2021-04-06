import React from "react";
import styles from "./FormButtons.scss";
import { ButtonRow } from "../../button/ButtonRow";
import { FormItem } from "../FormItem/FormItem";

export const FormButtons = ({ children }) => {
    return (
        <FormItem>
            <div className={styles.base}>
                <ButtonRow>{children}</ButtonRow>
            </div>
        </FormItem>
    );
};
