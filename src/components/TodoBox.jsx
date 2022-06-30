import React from 'react';
import _ from 'lodash';
import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTask: '',
            todos: []
        }
        this.dbKey = 'taskList';
    }

    static Item = Item;

    handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState(state => ({currentTask: event.target.value}));
    }

    addTask = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!this.state.currentTask.length) return;

        const uniqueId = _.uniqueId();
        if (uniqueId === 0) throw new Error('ID cannot be 0');

        let data = {
            itemId: uniqueId,
            task: this.state.currentTask
        }

        this.setData(data);

        this.setState(state => ({
            todos: [data, ...this.state.todos],
            currentTask: ''
        }));
    }


    setData(todoItemData) {
        if (!this.hasItem()) {
            this.setItem([todoItemData]);
            return;
        }

        const storageData = JSON.parse(
            localStorage.getItem(this.dbKey)
        )

        const data = [todoItemData, ...storageData];
        this.setItem(data);
    }

    hasItem() {
        let data = localStorage.getItem(this.dbKey);
        if (!data) return false;

        return true;
    }

    setItem(data) {
        return localStorage.setItem(
            this.dbKey,
            JSON.stringify(data)
        );
    }

    removeItemHandler = (id) => (event) => {
        event.stopPropagation();

        let todosArr = [...this.state.todos]

        const currentItemIndex = todosArr.findIndex(todoItem => {
            return todoItem.itemId === id
        });

        todosArr.splice(currentItemIndex, 1);

        this.setState(state => ({
            todos: todosArr
        }))

        this.setItem(todosArr);
    }

    removeItemById = (id) => this.removeItemHandler(id);

    renderItem() {
        return this.state.todos.map(item => {
            return <Item task={item} key={item.itemId} onRemove={this.removeItemById}/>
        })
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" value={this.state.currentTask} onChange={this.handleChange}
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
