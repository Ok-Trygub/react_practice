import ReactDOM from 'react-dom';
import React from 'react';
import MarkdownEditor from "./components/MarkdownEditor";

function App() {

    return (
        <div className="App">
            <MarkdownEditor onContentChange={console.log}/>
        </div>
    );
}

export default App;
