import React, { useState, useEffect } from "react";
import { Column } from "../Column";
import { Tr } from "../Tr";
import { Td } from "../Td";

export const TableBody = ({ rows, rowModifiers, onRowClick, columns }) => {
    return (
        <tbody>
            {rows && rows.length
                ? rows.map((row, index) => (
                      <TableRow
                          key={index}
                          row={row}
                          rowIndex={index}
                          modifiers={rowModifiers}
                          columns={columns}
                          onClick={onRowClick}
                      />
                  ))
                : null}
        </tbody>
    );
};

const TableRow = ({ row, rowIndex, modifiers, columns, onClick }) => {
    const [shouldBlink, setShouldBlink] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setShouldBlink(modifiers && modifiers.blink ? modifiers.blink(row) : false);
        setIsDisabled(modifiers && modifiers.disabled ? modifiers.disabled(row) : false);
    }, [row]);

    return (
        <Tr
            key={rowIndex}
            blink={shouldBlink}
            onClick={onClick ? () => onClick(row) : null}
            disabled={isDisabled}
        >
            {columns &&
                React.Children.map(columns, (column, colIndex) =>
                    column.type === Column ? (
                        <TableCell
                            key={`${rowIndex}_${colIndex}`}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            row={row}
                            column={column}
                        />
                    ) : null
                )}
        </Tr>
    );
};

const TableCell = ({ rowIndex, colIndex, row, column }) => {
    const { cell } = column.props || {};
    return cell ? (
        <Td>
            {cell({
                rowIndex,
                colIndex,
                row,
                column
            })}
        </Td>
    ) : null;
};
