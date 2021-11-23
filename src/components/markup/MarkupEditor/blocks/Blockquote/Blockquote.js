import React, { useEffect } from "react";
// import { getCurrentEntity, hasEntity } from '../../utils';
import { EditorState } from 'draft-js';

export const Blockquote = (props) => {
    const { block, blockProps, contentState } = props;

    useEffect(() => {
        // const entityData = contentState ? contentState.getEntity(block.getEntityAt(0)).getData() : null;
        // console.log("entityData", entityData);
        // setData(entityData);
        console.log("JA: ", props);
    }, [contentState]);

    const doSomething = () => {
        const { editorState, setEditorState } = blockProps;
        const contentStateWithEntity = contentState.createEntity("LINK", "IMMUTABLE", { src: "halla" });
        console.log("CONTENT", contentStateWithEntity);
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
          );

          console.log(newEditorState);
        setEditorState(newEditorState);
    };

    return (
        <React.Fragment>
            {block.text}
            <small>Author here</small>
            <button onClick={doSomething}>Trigger</button>
        </React.Fragment>
    );
};
