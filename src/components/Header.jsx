const Header = (props) => {

    return (
        <div className="modal-header">
            <div className="modal-title">{props.children}</div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
        </div>
    )
}

export default Header;
