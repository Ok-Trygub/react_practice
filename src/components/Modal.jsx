import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {

    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {


        return (
            <div className="modal" role="dialog">
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
