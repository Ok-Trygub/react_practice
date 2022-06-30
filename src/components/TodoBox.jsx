import React from 'react';
import _ from 'lodash';
import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemId: 0,
            task: ''
        }
        this.dbKey = 'taskList';
    }

    static Item = Item;

    handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const {target} = event;
        this.setState(state => ({task: target.value}));

        // setTimeout(() => console.log(this.state.task), 1000)
    }

    addTask = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!this.state.task.length) return;

        const uniqueId = _.uniqueId();

        this.setState(state => ({currentItemId: uniqueId}));

        let data = {
            itemId: uniqueId,
            task: this.state.task
        }
        console.log(data)

        this.setData(data);
    }


    setData(todoItemData) {
        if (!this.hasItem()) {
            this.setItem([todoItemData]);
            return;
        }

        const storageData = JSON.parse(
            localStorage.getItem(this.dbKey)
        )

        const currentData = [...storageData, todoItemData];
        this.setItem(currentData);
    }

    hasItem() {
        let data = localStorage.getItem(this.dbKey);
        if (data === null) return false;

        return true;
    }

    setItem(data) {
        return localStorage.setItem(
            this.dbKey,
            JSON.stringify(data)
        );
    }

    renderItem() {
        return <Item task={this.state.task}/>
    }


    render() {


        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" value={this.state.task} onChange={this.handleChange}
                                   required="" className="form-control" placeholder="I am going..."/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.addTask}>add</button>
                    </form>
                </div>

                {this.renderItem()}
            </div>
        )
    }
}

export default TodoBox;
