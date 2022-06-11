import React from "react";

class Progress extends React.Component {

    render() {

        const {percentage} = this.props
        const styleObj = {
            progressWrapper: {
                width: '400px'
            },
            progressBar: {
                width: percentage + '%',
            }
        }
        return (
            <div className="progress" style={styleObj.progressWrapper}>
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                     style={styleObj.progressBar}
                     aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        );
    }
}

export default Progress;
