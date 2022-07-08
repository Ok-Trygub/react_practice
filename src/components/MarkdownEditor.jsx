import React from 'react';
import {useRef, useEffect} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function MarkdownEditor(props) {
    const elem = useRef(null);
    console.log(elem)

    useEffect(() => {
        const editor = new Editor({
            el: elem.current,
            hideModeSwitch: true,
        });
        console.log(editor)

        editor.addHook('change', props.onContentChange);
    })

    return (
        <div id="editor" ref={elem}></div>
    )
}

export default MarkdownEditor;
