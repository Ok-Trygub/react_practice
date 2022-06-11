import React from 'react';

class ListGroup extends React.Component {

    renderData() {
        const {children} = this.props

        return children.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <li className="list-group-item">{item}</li>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <ul className='list-group'>
                {this.renderData()}
            </ul>
        );
    }
}

export default ListGroup;
