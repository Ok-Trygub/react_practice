import React from 'react';

class List extends React.Component {
    render() {
        const btnStyles = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        const {type, text} = this.props;

        let btnClass = 'alert';
        if (btnStyles.includes(type)) {
            btnClass = cn('alert', {
                [`alert-${type}`]: true,
            });
        }

        return (
            <div className={btnClass} role="alert">
                {text}
            </div>
        )
    }
}

export default List;
