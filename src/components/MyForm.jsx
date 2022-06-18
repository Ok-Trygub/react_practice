import React from 'react';
import ResultTable from './ResultTable';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            checked: 'false',
            formFilled: 'false'
        };
        console.log(this.state)
    }

    backHandler = () => {
        this.setState(state => ({formFilled: 'false'}));
    }

    formHandler = () => {
        this.setState(state => ({formFilled: 'true'}));
    }

    handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const {target} = event;
        this.setState(state => ({[target.name]: target.value}));
    }

    checkBox = () => {
        this.setState(state => ({checked: !!!state.checked}));
    }

    render() {
        if (this.state.formFilled === 'true') {
            const data = Object.entries(this.state);

            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.backHandler}>Back</button>
                    <ResultTable data={data}/>
                </div>
            )
        }

        return (
            <form name="myForm">

                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                           value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password"
                           placeholder="Password" value={this.state.password} onChange={this.handleChange}/>

                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea type="text" className="form-control" name="address" id="address"
                              placeholder="1234 Main St" value={this.state.address}
                              onChange={this.handleChange}></textarea>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" value={this.state.city}
                           onChange={this.handleChange}/>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control" value={this.state.country}
                            onChange={this.handleChange}>
                        <option>Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="china">China</option>
                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                                   value={this.state.checked} onChange={this.checkBox}/>
                            Accept Rules
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.formHandler}>Sign in</button>
            </form>
        );
    }
}

export default MyForm;
