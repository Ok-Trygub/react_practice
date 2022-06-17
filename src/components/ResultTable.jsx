import React from 'react';

class ResultTable extends React.Component {
    render() {
        const data = this.props.data

        return (
            <table className="table">
                <tbody>
                {data.sort().map(([key, value], index) => {
                    if (value) return (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>
        )
    }
}

export default ResultTable;
