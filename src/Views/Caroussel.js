import Carousel from 'react-bootstrap/Carousel';
import './style.css';

function Caroussel() {
    return ( <
        Carousel controls = { false } >
        <
        Carousel.Item >

        <
        h3 className = ' py-2' > SINGLE ROOMS < /h3> <
        p > Perfect
        for guests looking
        for a simple get - away but filled with all the thrills of any 5 - star. < /p>  < /
        Carousel.Item > <
        Carousel.Item >

        <
        h3 className = 'py-2' > DOUBLE ROOMS < /h3> <
        p > A little more space didnt hurt anyone, get the most out of your double sized experience. < /p>  < /
        Carousel.Item > <
        Carousel.Item >

        <
        h3 className = ' py-2' > DELUXE ROOMS < /h3> <
        p >
        Its the full experience, get it all to its maximum.Enjoy unlimited luxury. <
        /p>  < /
        Carousel.Item >
        <
        /
        Carousel >
    );
}

export default Caroussel;