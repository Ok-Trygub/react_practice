import React from 'react';
import cn from 'classnames';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    onChangeLeft = () => this.setState(state => ({isActive: 'left'}))
    onChangeRight = () => this.setState(state => ({isActive: 'right'}))

    render() {
        const leftBtnClass = cn({
            'active': this.state.isActive === 'left',
        })
        const rightBtnClass = cn({
            'active': this.state.isActive === 'right',
        })

        return (
            <div className="btn-group" role="group">
                <button type="button" className={`btn btn-secondary left ${leftBtnClass}`}
                        onClick={this.onChangeLeft}>Left
                </button>
                <button type="button" className={`btn btn-secondary right ${rightBtnClass}`}
                        onClick={this.onChangeRight}>Right
                </button>
            </div>
        );
    }
}


// class BtnGroup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isActive: false
//         }
//     }
//
//     onChange = (type) => () => {  // closure
//         this.setState(state => ({isActive: type}))
//         // this.setState(({isActive}) => ({isActive: type}))
//     }
//
//     render() {
//         const leftBtnClass = cn({
//             'active': this.state.isActive === 'left',
//         })
//         const rightBtnClass = cn({
//             'active': this.state.isActive === 'right',
//         })
//
//         return (
//             <div className="btn-group" role="group">
//                 <button type="button" className={`btn btn-secondary left ${leftBtnClass}`}
//                         onClick={this.onChange('left')}>Left
//                 </button>
//                 <button type="button" className={`btn btn-secondary right ${rightBtnClass}`}
//                         onClick={this.onChange('right')}>Right
//                 </button>
//             </div>
//         );
//     }
// }

export default BtnGroup;
