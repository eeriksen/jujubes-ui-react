import React, { useContext, useState } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic";
import { AppContext } from "../../layout/AppContext";
import styles from "./BreadcrumbTrail.scss";
import { PopOver } from "../PopOver";
import { Button } from "../../button/Button";
import { Menu, MenuItem } from "../Menu";

export const BreadcrumbTrail = ({ homeIcon }) => {
    const { pathname } = useLocation();
    const { crumbs } = useContext(AppContext);
    const [popVisible, setPopVisible] = useState(false);
    return crumbs && crumbs.length ? (
        <div className={styles.base}>
            <div className={styles.pop}>
                <PopOver
                    padding="regular"
                    visible={popVisible}
                    onClose={() => setPopVisible(false)}
                    content={
                        <CrumbItems
                            crumbs={crumbs}
                            homeIcon={homeIcon}
                            onClose={() => setPopVisible(false)}
                        />
                    }
                >
                    <Button
                        size="tiny"
                        active={popVisible}
                        className={styles.button}
                        onClick={() => setPopVisible(!popVisible)}
                    >
                        <Icon name="three-dots" size="large" color="primary" />
                    </Button>
                </PopOver>
            </div>
            <div className={styles.container}>
                {crumbs &&
                    Object.assign([], crumbs)
                        .reverse()
                        .map((crumb) => (
                            <div
                                key={crumb.id}
                                className={classNames(styles.crumb, {
                                    [styles.active]: crumb.link === pathname
                                })}
                            >
                                <div className={styles.wrapper}>
                                    <Clickable block className={styles.label} link={crumb.link}>
                                        <div className={styles.icon}>
                                            <Icon name="home" size="medium" />
                                        </div>
                                        {crumb.label}
                                    </Clickable>
                                    <div className={styles.arrow}>
                                        <Icon name="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    ) : null;
};

const CrumbItems = ({ crumbs, homeIcon, onClose }) => {
    return (
        <Menu>
            {crumbs &&
                crumbs
                    .filter((_, index) => index < crumbs.length - 1)
                    .map((crumb, index) => (
                        <MenuItem
                            key={crumb.id}
                            icon={index === 0 ? homeIcon : "chevron-right"}
                            iconSize={index === 0 ? null : "small"}
                            label={crumb.label}
                            link={crumb.link}
                            onClick={onClose}
                        />
                    ))}
        </Menu>
    );
};

BreadcrumbTrail.defaultProps = {
    homeIcon: "home"
};
