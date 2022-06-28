import React from 'react';

const List = (props) => {
    return (
        <div className="list-group">{props.children}
            {props.items.map((item, index) => {
                return (
                    <button type="button"
                            className="list-group-item list-group-item-action"
                            key={index}
                            onClick={props.removeItem(index)}>{item}</button>
                )
            })}

        </div>
    )
}

export default List;
