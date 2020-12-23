import React from "react";
import { Column } from "../../Column";

export const TableHead = ({ children }) => {
    return (
        <thead>
            <tr>
                {React.Children.map(children, (column, index) =>
                    column.type === Column ? <th key={index}>{column.props.label}</th> : null
                )}
            </tr>
        </thead>
    );
};
