import React from 'react';
import _ from 'lodash';
import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemId: '',
            task: ''
        }
        this.dbKey = 'taskList';
        this.todos = [];

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

        if (uniqueId === 0) throw new Error('ID cannot be 0');
        if (uniqueId === this.state.itemId) {
            throw new Error('ID of current element the same as ID of previous element');
        }

        this.setState(state => ({itemId: uniqueId}));

        let data = {
            itemId: uniqueId,
            task: this.state.task
        }
        this.setData(data);
        this.setState(state => ({task: ''}));
    }


    setData(todoItemData) {
        if (!this.hasItem()) {
            this.setItem([todoItemData]);
            this.todos = [todoItemData];
            return;
        }

        const storageData = JSON.parse(
            localStorage.getItem(this.dbKey)
        )

        this.todos = [todoItemData, ...storageData];
        console.log(this.todos)
        this.setItem(this.todos);
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
        // console.log(this.todos)

        return this.todos.map(item => {
            return <Item task={item.task} key={item.itemId}/>
        })
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
