import React, { useState } from "react";
import styles from "./LinkType.scss";

import { Input } from "../../../../form/Input";
import { Button } from "../../../../button/Button/Button";
import { ButtonGroup } from "../../../../button/ButtonGroup";
import { Checkbox } from "../../../../form/Checkbox";

export const LinkType = ({ data, onPlace, onRemove }) => {
    const [url, setUrl] = useState(data ? data.url : "");
    const [targetOption, setTargetOption] = useState(data ? data.targetOption : null);
    const [error, setError] = useState(false);

    /**
     * Set link value
     * @private
     */
    const handleSetLink = () => {

        // Check if url
        if (!url || url.trim() === "") {
            return onRemove();
        }

        // Add protocol
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            setUrl(`http://${url}`);
        }

        // Validate url
        const expression = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/gi;
        const regex = new RegExp(expression);
        if (!url.match(regex)) {
            setError(true);
        }

        // Set link
        onPlace({ url, targetOption });
    };

    return (
        <div>
            <div className={styles.base}>
                <div className={styles.input}>
                    <div className={styles.field}>
                        <Input
                            value={url}
                            error={error}
                            placeholder="http://..."
                            onChange={setUrl}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <ButtonGroup>
                            <Button square icon="check" iconColor="success" onClick={handleSetLink} />
                            <Button square icon="close" iconColor="error" onClick={onRemove} />
                        </ButtonGroup>
                    </div>
                </div>
                <div className={styles.choice}>
                    <Checkbox
                        checked={targetOption === "blank"}
                        onChange={() => setTargetOption(targetOption === "blank" ? null : "blank")}
                    >
                        Åpne lenke i nytt vindu
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};
