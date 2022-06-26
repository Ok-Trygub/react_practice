import React from 'react';
import cn from "classnames";

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

        const images = this.props.images;
        const className = event.target.className;

        if (className === 'carousel-control-next' || className === 'carousel-control-next-icon') {
            this.setState((state) => ({pathIndex: state.pathIndex === images.length - 1 ? 0 : ++state.pathIndex}));
        }

        if (className === 'carousel-control-prev' || className === 'carousel-control-prev-icon') {
            this.setState((state) => ({pathIndex: state.pathIndex === 0 ? images.length - 1 : --state.pathIndex}));
        }
    }

    renderSlide() {
        const {images} = this.props

        return images.map((item, index) => {
            const active = cn('carousel-item',
                {'active': this.state.pathIndex === index}
            );

            return (
                <div className={active} key={index}>
                    <img className="d-block w-100 " src={item} alt="slider"></img>
                </div>
            );
        })
    }

    render() {
        return (
            <div id="carousel" className='carousel slide' data-bs-ride="carousel">

                <div className="carousel-inner">
                    {this.renderSlide()}
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
