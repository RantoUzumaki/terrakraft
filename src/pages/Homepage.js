import CarouselTemplate from "../components/Carousel";
import "../css/homepage.css";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import water from "../assets/water_resistant.png";
import authentic from "../assets/authentic_embossed.png";
import imprint from "../assets/imprint_resistant.png";
import abrasion from "../assets/abrasion_class.png";
import { api } from "./woocommerce";

function Homepage() {
    const [flooring, setFlooring] = useState();
    const [wallcovering, setWallcovering] = useState();

    useEffect(() => {
        async function getProducts() {
            api.get("products", { category: 131 }).then((res) => {
                setFlooring(res.data);
            });
            api.get("products", { category: 132 }).then((res) => {
                setWallcovering(res.data);
            });
        }

        getProducts();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div>
            <div className="HomeMainDiv">
                <CarouselTemplate />
                <div className="HomeRow1">
                    <div className="HomeAdvancedSearchDiv">
                        <p>Confused?</p>
                        <p>Let us help you find</p>
                        <p>the right product for you ...</p>
                        <button className="HomeAdvancedSearch" type="button">
                            Advanced Search <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="HomeRow2">
                    <div className="HomeRow2Col1">
                        <div>
                            <div className="HomeCircleElement"></div>
                            <p>4000 Buildings</p>
                            <p>completed</p>
                        </div>
                        <div>
                            <div className="HomeCircleElement"></div>
                            <p>15684535 sq.ft</p>
                            <p>Covered</p>
                        </div>
                        <div>
                            <div className="HomeCircleElement"></div>
                            <p>20 years</p>
                            <p>of excellence</p>
                        </div>
                    </div>
                    <div className="HomeRow2Col2">
                        <div className="HomeWaterResistant">
                            <img src={water} alt="water" />
                            <p>Water Resistant</p>
                        </div>
                        <div className="HomeAuthentic">
                            <img src={authentic} alt="authentic" />
                            <p>
                                Authentic <br />
                                Embossed
                            </p>
                        </div>
                        <div className="HomeImprint">
                            <img src={imprint} alt="imprint" />
                            <p>
                                Stain/Imprint <br />
                                Resistant
                            </p>
                        </div>
                        <div className="HomeAbrasion">
                            <img src={abrasion} alt="abrasion" />
                            <p>
                                Abrasion <br />
                                Class AC4
                            </p>
                        </div>
                    </div>
                </div>
                <div className="HomeRow3">
                    <div className="HomeRow3Col1">
                        <div className="HomeFlooringDiv">
                            <p className="HomeFlooring">Floorings</p>
                        </div>
                    </div>
                    <div className="HomeRow3Col2">
                        {flooring ? (
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {flooring.map((data) => (
                                    <div
                                        key={data.id}
                                        className="HomeFlooringImageDivSec"
                                    >
                                        <div className="HomeFlooringImageDiv">
                                            <img
                                                src={data.images[0].src}
                                                alt={data.name}
                                                className="HomeFlooringImage"
                                            />
                                            <div className="HomeFlooringTextHoverDiv">
                                                <p className="HomeFlooringTextHover">
                                                    {data.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className="HomeRow4">
                    <div className="HomeRow4Col1">
                        <div className="HomeWallCoveringDiv">
                            <p className="HomeWallCovering">Wallpapers</p>
                        </div>
                    </div>
                    <div className="HomeRow4Col2">
                        {wallcovering ? (
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                            >
                                {wallcovering.map((data) => (
                                    <div
                                        key={data.id}
                                        className="HomeWallCoveringImageDivSec"
                                    >
                                        <div className="HomeWallCoveringImageDiv">
                                            <img
                                                src={data.images[0].src}
                                                alt={data.name}
                                                className="HomeWallCoveringImage"
                                            />
                                            <div className="HomeWallCoveringTextHoverDiv">
                                                <p className="HomeWallCoveringTextHover">
                                                    {data.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className="HomeRow5">
                    <div className="HomeRow5Col1">
                        <div className="HomeFeaturedProductsTextDiv">
                            <p className="HomeFeaturedProductsText">
                                Featured Products
                            </p>
                        </div>
                    </div>
                    <div className="HomeRow5Col2">
                        {wallcovering ? (
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                            >
                                {wallcovering.map((data) => (
                                    <div
                                        key={data.id}
                                        className="HomeWallCoveringImageDivSec"
                                    >
                                        <div className="HomeWallCoveringImageDiv">
                                            <img
                                                src={data.images[0].src}
                                                alt={data.name}
                                                className="HomeWallCoveringImage"
                                            />
                                            <div className="HomeWallCoveringTextHoverDiv">
                                                <p className="HomeWallCoveringTextHover">
                                                    {data.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
