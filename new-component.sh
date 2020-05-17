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


# styles.scss
cat >styles.scss <<EOL
@import "../../../styles/base";

/* ===================================================================
   ${capital_name}
   =================================================================== */

.base {

}
EOL


#Component.js
cat >"$name.js" <<EOL
import React from "react"
import styles from "./styles.scss"


export const ${name} = ({children}) => {
    return (
        <div className={styles.base}>
            {children}
        </div>
    )
};
EOL


echo "DONE: $name"
