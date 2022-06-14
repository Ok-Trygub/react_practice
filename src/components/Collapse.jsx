import React from 'react';
import cn from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened
        }
    }

    clickHandler = () => {
        this.setState(state => ({opened: !state.opened}))
    }

    render() {
        const {text} = this.props

        const collapse = cn('collapse', {
            'show': this.state.opened === true
        })

        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={this.state.opened} onClick={this.clickHandler}>Link with href</a>
                </p>
                <div className={collapse}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse;
