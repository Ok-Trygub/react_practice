import React from 'react';

function Counter(props) {
    return (
        <div className="btn-group font-monospace" role="group">
            <button type="button" className="btn btn-outline-success" onClick={props.toggle}>+</button>
            <button type="button" className="btn btn-outline-danger" onClick={props.toggle}>-</button>
        </div>
    )
}

export default Counter;
