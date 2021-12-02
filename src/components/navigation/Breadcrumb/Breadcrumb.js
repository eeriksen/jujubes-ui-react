import React, { useContext, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { randomString } from "../../../../.storybook/utils/stringUtils";
import { AppContext } from "../../layout/AppContext";

export const Breadcrumb = ({ link, label }) => {
    const { addCrumb, removeCrumb } = useContext(AppContext);
    const [crumbId] = useState(randomString(8));

    useLayoutEffect(() => {
        addCrumb({
            id: crumbId,
            link: link,
            label
        });
        return () => {
            removeCrumb(crumbId);
        };
    }, []);

    return <span visibilty="hidden"></span>;
};

Breadcrumb.propTypes = {
    /**
     * Link back to the given page
     */
    link: PropTypes.string,
    /**
     * Crumb label
     */
    label: PropTypes.string
};
