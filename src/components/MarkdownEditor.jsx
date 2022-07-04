import React from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function MarkdownEditor() {
    const editor = new Editor({
        el: document.querySelector('#editor'),
        hideModeSwitch: true,
    });

    // addHook - что за метод?
    editor.addHook('change', () => {
        const content = editor.getMarkdown();
        console.log(content)

        // Зачем нужна ф-я onContentChange, если внутри этой функции будет, как ты написал
        // код который будет вызван при изменении содержимого редактора


        function contentHandler(content) {
            console.log(content)
        }



    });
}

export default MarkdownEditor;
