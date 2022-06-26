import Carousel from "./components/Carousel";

function App() {
    const paths = ['./images/one.jpg', './images/two.webp', './images/three.jpg'];

    return (
        <div className="App">
            <Carousel images = {paths} />
        </div>
    );
}

export default App;
