import React, { useState, useEffect } from "react";
import { Column } from "../../Column";
import { Tr } from "../../Tr";
import { Td } from "../../Td";

export const TableBody = ({ rows, rowModifiers, onRowClick, children }) => {
    const [prependedStaticRows, setPrependedStaticRows] = useState([]);
    const [appendedStaticRows, setAppendedStaticRows] = useState([]);
    const [dynamicColumns, setDynamicColumns] = useState([]);

    useEffect(() => {
        setPrependedStaticRows([]);
        setAppendedStaticRows([]);
        setDynamicColumns([]);
        children &&
            children.map((e) => {
                switch (e.type) {
                    case Column: {
                        setDynamicColumns((l) => {
                            l.push(e);
                            return l;
                        });
                        break;
                    }
                    case Tr: {
                        if (dynamicColumns.length) {
                            setAppendedStaticRows((l) => {
                                l.push(e);
                                return l;
                            });
                        } else {
                            setPrependedStaticRows((l) => {
                                l.push(e);
                                return l;
                            });
                        }
                        break;
                    }
                    default: {
                        return e;
                    }
                }
                return e;
            });
    }, [children]);

    // Iterate rows
    return (
        <tbody>
            {/* Prepended static rows */}
            {prependedStaticRows}

            {/* Dynamic rows */}
            {rows && rows.length
                ? rows.map((row, index) => (
                      <TableRow
                          key={index}
                          row={row}
                          rowIndex={index}
                          modifiers={rowModifiers}
                          columns={dynamicColumns}
                          onClick={onRowClick}
                      />
                  ))
                : null}

            {/* Appended static rows */}
            {appendedStaticRows}
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
            onClick={() => onClick && !isDisabled && onClick(row)}
            disabled={isDisabled}
        >
            {columns &&
                columns.map((column, colIndex) => (
                    <TableCell
                        key={`${rowIndex}_${colIndex}`}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        row={row}
                        column={column}
                    />
                ))}
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
