import React from 'react';
import Counter from "./Counter";
import List from "./List";

export default class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            values: []
        }
    }

    static Counter = Counter;
    static List = List;

    countHandler = (event) => {
        event.preventDefault();
        const className = event.target.className;

        if (className === 'btn btn-outline-success') {
            this.setState(state => ({
                count: ++state.count,
                values: [state.count, ...state.values]
            }));
        }

        if (className === 'btn btn-outline-danger') {
            this.setState(state => ({
                count: --state.count,
                values: [state.count, ...state.values]
            }));
        }
    }

    removeItem = (rmIndex) => (event) => {
        event.preventDefault();

        const updatedValues = this.state.values.filter((item, index) => rmIndex !== index);
        this.setState(state => ({
            values: updatedValues,
            count: updatedValues[0],
        }));
    }

    render() {
        const {values} = this.state;

        if (values.length) return (
            <div>
                <Counter toggle={this.countHandler}/>
                <List items={values} removeItem={this.removeItem}/>
            </div>
        )

        return (
            <div>
                <Counter toggle={this.countHandler}/>
            </div>
        );
    }
}
