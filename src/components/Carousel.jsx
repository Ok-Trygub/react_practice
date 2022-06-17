import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathIndex: 0,
        }
    }

    changeImage = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const images= this.props.images;

        if (event.target.className === 'carousel-control-next') {
            this.setState((state) => ({pathIndex: state.pathIndex === images.length - 1 ? 0 : ++state.pathIndex}));
        }

        if (event.target.className === 'carousel-control-prev') {
            this.setState((state) => ({pathIndex: state.pathIndex === 0 ? images.length - 1 : --state.pathIndex}));
        }
        console.log(this.state.pathIndex)
    }

    render() {
        const {images} = this.props

        return (
            <div id="carousel" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className='carousel-item active'>
                        <img alt="" className="d-block w-100" src={images[this.state.pathIndex]}/>
                    </div>

                    <div className="carousel-item">
                        <img alt="" className="d-block w-100" src={images[this.state.pathIndex]}/>
                    </div>

                    <div className="carousel-item">
                        <img alt="" className="d-block w-100" src={images[this.state.pathIndex]}/>
                    </div>
                </div>

                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
                        onClick={this.changeImage}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next"
                        onClick={this.changeImage}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        )
    }

}

export default Carousel;
