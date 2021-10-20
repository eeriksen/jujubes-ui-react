#!/bin/bash
# This script will create a new React component

component_dir="src/components/"

echo "Component name:"
read name

echo "Component folder ($component_dir):"
read folder

# Create directory if not exists
if [ ! -d "$component_dir$folder" ]; then
  mkdir "$component_dir$folder"
fi

# Move to that folder
cd "$component_dir$folder";

# Create a directory for the component
mkdir "$name"

# Navigate to new folder
cd "$name"

capital_name="$(echo "$name" | sed 's/\([A-Z]\)/ \1/g' | xargs | awk '{print toupper($0)}')"

# index.js
cat >index.js <<EOL
export * from "./${name}";
EOL


# Component.scss
cat >"$name.scss" <<EOL
@import "../../../styles/base";

/* ===================================================================
   ${capital_name}
   =================================================================== */

.base {
    position: relative;
}
EOL


# Component.js
cat >"$name.js" <<EOL
import React from "react"
import styles from "./${name}.scss"


export const ${name} = ({children}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
};
EOL


# Component.stories.mdx
cat >"$name.stories.mdx" <<EOL
import { useState } from "react";
import { Meta, Story, Canvas, ArgsTable } from "@storybook/addon-docs";
import { ${name} } from "./${name}";

<Meta title="Components/UNGROUPED/${name}" component={${name}} />

# ${name}

Write something here.

<ArgsTable of={${name}} />

### Basic

<Canvas>
    <Story name="basic">
        <${name}>Something here</${name}>
    </Story>
</Canvas>
EOL


echo "DONE: $name"
