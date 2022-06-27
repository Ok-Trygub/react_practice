import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import cn from 'classnames';

class Modal extends React.Component {

    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const {isOpen} = this.props;
        console.log(isOpen)

        const modalClass = cn('modal', {
            'show': isOpen,
            'fade': isOpen
        })

        const modalStyle = {
            display: cn({
                'block': isOpen,
                'none': !isOpen,
            })
        }

        return (
            <div className={modalClass} style={modalStyle} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default Modal;
