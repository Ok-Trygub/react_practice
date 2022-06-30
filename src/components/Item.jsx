import React from 'react';

class Item extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="row">
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary btn-sm"
                                    onClick={this.props.onRemove(this.props.task.itemId)}>-
                            </button>
                        </div>
                        <div className="col">{this.props.task.task}</div>
                    </div>
                    <hr/>
                </div>
            </ React.Fragment>
        )
    }
}

export default Item;
