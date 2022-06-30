import React from 'react';

class Item extends React.Component {


render(){
    return(

        <React.Fragment>

            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm">-</button>
                    </div>
                    <div className="col">{this.props.task}</div>
                </div>
                <hr />
            </div>

        </ React.Fragment>

    )
}
}

export default Item;
