import ReactDOM from 'react-dom';
import React from 'react';
import MarkdownEditor from "./components/MarkdownEditor";

function App() {

    return (
        <div className="App">

            Из задания: Компонент принимает на вход функцию как свойство onContentChange, которая вызывается при каждом
            изменении в редакторе.

            Эту ф-ию надо прописать тут прямо в скобках?

            или внутри компонента? тогда как ее отсюда вызвать?

            что она должна делать с контентом?
            <MarkdownEditor onContentChange={console.log}/>
        </div>
    );
}

export default App;
