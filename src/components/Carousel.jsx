import React from 'react';
import cn from 'classnames';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'active',
            pathIndex: 0,
        }

        console.log(this.state.pathIndex);
    }

    changeImage = (event) => {


        console.log(this.state.pathIndex);


        if (event.target.className === 'carousel-control-next') this.setState(state => ({pathIndex: ++state.pathIndex}));
        if (event.target.className === 'carousel-control-prev') this.setState(state => ({pathIndex: --state.pathIndex}));
        console.log(this.state.pathIndex)


        // this.setState(state => ({isActive: 'active'}))
        // setTimeout(() => console.log(this.state), 2000)

        // this.setState(state => ({pathIndex: ++state.pathIndex}));
        //
        // console.log(this.state.pathIndex);



        // const newIndex = event.target.className === 'carousel-control-next' ? this.state.pathIndex +1 :this.state.pathIndex -1
        // this.setState({
        //     pathIndex: newIndex
        // })
        // console.log(this.state.pathIndex);

    }

    render() {
        const {images} = this.props
        // console.log(images)

        const isActive = cn('carousel-item', {
            'active': this.state.isActive === 'active',
        });


        return (
            <div id="carousel" className='carousel slide' data-bs-ride="carousel">
                <div className="carousel-inner">
            {/*//         <div className={isActive} key={images.index}>*/}
            {/*//             <img alt="" className="d-block w-100" src={images[this.state.pathIndex]}/>*/}
            {/*//         </div>*/}
            {/*//*/}

                    <div className="carousel-item active">
                        <img alt="" className="d-block w-100" src="./images/one.jpg"/>
                    </div>

                    <div className="carousel-item">
                        <img alt="" className="d-block w-100" src="./images/two.webp"/>
                    </div>

                    <div className="carousel-item">
                        <img alt="" className="d-block w-100" src="./images/three.jpg"/>
                    </div>

              </div>




                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"
                        >
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
