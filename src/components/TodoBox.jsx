import React from 'react';
import Item from "./Item";

class TodoBox extends React.Component {


    static Item = Item;


    render() {
        return (
            <div>
                <div className="mb-3">

                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" defaultValue="" required="" className="form-control"
                                   placeholder="I am going..."/>
                        </div>

                        <button type="submit" className="btn btn-primary">add</button>
                    </form>


                </div>
            </div>


        )
    }


}

export default TodoBox;
