import Carousel from "./components/Carousel";
// import firstImg from './images/one.jpg';
// import secondImg from './images/two.jpg';
// import thirdImg from './images/three.jpg';

function App() {
    const paths = ['./images/one.jpg', './images/two.webp', './images/three.jpg'];

    return (
        <div className="App">
            <Carousel images = {paths} />
        </div>
    );
}

export default App;
