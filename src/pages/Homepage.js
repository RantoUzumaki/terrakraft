import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/product-image1.png";
import Image2 from "../assets/product-image2.png";
import Image3 from "../assets/product-image3.jpg";
import Image4 from "../assets/product-image4.jpg";

function Homepage() {
    return (
        <div>
            <Carousel autoPlay interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={Image1} alt="image1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image2} alt="image1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Image3} alt="image1" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Image4} alt="image1" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Homepage;
