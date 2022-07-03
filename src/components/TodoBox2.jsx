import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Item2 from "./Item2";


const TodoBox2 = () => {

    const dbKey = 'taskList';
    const [currentTask, setCurrentTask] = useState('');
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        event.preventDefault();
        event.stopPropagation();

        setCurrentTask(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!currentTask.length) return;

        const uniqueId = _.uniqueId();
        if (uniqueId === 0) throw new Error('ID cannot be 0');

        let data = {
            itemId: uniqueId,
            task: currentTask
        }

        setData(data);

        setTodos([data, ...todos]);
        setCurrentTask('');
    }

    function setData(todoItemData) {
        if (!hasItem()) {
            setItem([todoItemData]);
            return;
        }

        const storageData = JSON.parse(
            localStorage.getItem(dbKey)
        )

        const data = [todoItemData, ...storageData];
        setItem(data);
    }

    function hasItem() {
        let data = localStorage.getItem(dbKey);
        if (!data) return false;

        return true;
    }

    function setItem(data) {
        return localStorage.setItem(
            dbKey,
            JSON.stringify(data)
        );
    }

    const removeItemHandler = (id) => (event) => {
        event.stopPropagation();

        let todosArr = [...todos];

        const currentItemIndex = todosArr.findIndex(todoItem => {
            return todoItem.itemId === id
        });

        todosArr.splice(currentItemIndex, 1);

        setTodos(todosArr);

        if (!todosArr.length) localStorage.clear();
        else setItem(todosArr);
    }


    const removeItemById = (id) => removeItemHandler(id);


    useEffect(() => {
        const data = JSON.parse(
            localStorage.getItem(dbKey)
        );
        if (!data) return;

        setTodos(data);
    }, []);


    const renderItem = () => {
        if (!todos) return null;

        return todos.map(item => {
            return <Item2 task={item} key={item.itemId} onRemove={removeItemById}/>
        })
    }

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text" value={currentTask} onChange={handleChange}
                               required="" className="form-control" placeholder="I am going..."/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addTask}>add</button>
                </form>
            </div>
            {renderItem()}
        </div>
    )
}

export default TodoBox2;
