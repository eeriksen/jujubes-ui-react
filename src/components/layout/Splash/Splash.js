import React from "react";
import styles from "./Splash.scss";

export const Splash = ({ logo, footer, children }) => {
    return (
        <div className={styles.base}>

            {/* Center */}
            <div className={styles.center}>

                {/* Logo */}
                {logo ? <div className={styles.logo}>{logo}</div> : null}

                {/* Box */}
                <div className={styles.box}>{children}</div>
            </div>

            {/* Footer */}
            {footer ? <div className={styles.footer}>{footer}</div> : null}
        </div>
    );
};
