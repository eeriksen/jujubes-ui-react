import React, { useState } from "react";
import { CardContent } from "../../../../src/components/card";
import SimpleEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { Toolbar } from "../../../../src/components/navigation/Toolbar";
import { Button } from "../../../../src/components/button/Button/Button";
import { Callout } from "../../../../src/components/notify/Callout/Callout";

export const Editor = ({ theme, setTheme }) => {
    const [editableTheme, setEditableTheme] = useState(JSON.stringify(theme, null, 2));
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [error, setError] = useState(null);
    const handleSave = () => {
        setError(null);
        try {
            const parsed = JSON.parse(editableTheme);
            setTheme(parsed);
            setUnsavedChanges(false);
        } catch (e) {
            setError("Invalid JSON structure.");
        }
    };
    return (
        <React.Fragment>
            <Toolbar>
                <Toolbar.Item>
                    <Button
                        size="small"
                        icon="save"
                        iconColor="success"
                        disabled={!unsavedChanges}
                        onClick={handleSave}
                    >
                        Save changes
                    </Button>
                </Toolbar.Item>
                <Toolbar.Item divideLeft>
                    <Button
                        size="small"
                        icon="rotate-left"
                        iconColor="primary"
                        disabled={!unsavedChanges}
                        onClick={() => setEditableTheme(JSON.stringify(theme, null, 2))}
                    >
                        Reset
                    </Button>
                </Toolbar.Item>
            </Toolbar>
            <CardContent>
                {error ? <Callout color="error">{error}</Callout> : null}
                <SimpleEditor
                    value={editableTheme}
                    onValueChange={(val) => setUnsavedChanges(true) | setEditableTheme(val)}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12
                    }}
                />
            </CardContent>
        </React.Fragment>
    );
};
