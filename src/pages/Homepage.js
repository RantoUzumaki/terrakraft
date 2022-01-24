import CarouselTemplate from "../components/Carousel";
import "../css/homepage.css";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProdImg from "../assets/product-image4.jpg";
import EbookImage from "../assets/ebook-download.jpg";
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
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
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
                                autoPlay={false}
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
                                autoPlay={false}
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
                        <div className="HomePagebgStripe">
                            <div className="HomeFeaturedProductsTextDiv">
                                <p className="HomeFeaturedProductsText">
                                    Featured Products
                                </p>
                            </div>
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
                                autoPlay={false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={[
                                    "desktop",
                                    "tablet",
                                    "mobile",
                                ]}
                            >
                                {wallcovering.map((data) => (
                                    <div
                                        key={data.id}
                                        className="HomeFeaturedProductsImageDivSec"
                                    >
                                        <div className="HomeFeaturedProductsImageDiv">
                                            <img
                                                src={data.images[0].src}
                                                alt={data.name}
                                                className="HomeFeaturedProductsImage"
                                            />
                                            <div className="HomeFeaturedProductsTitleTextDiv">
                                                <p className="HomeFeaturedProductsTitleText">
                                                    {data.name}
                                                </p>
                                                <p className="HomeFeaturedProductsPriceText">
                                                    {
                                                        data.attributes[2]
                                                            .options[0]
                                                    }
                                                    / sq.ft
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
                <div className="HomeRow6">
                    <div className="HomeRow6Col1">
                        <div className="HomePagebgStripe">
                            <div className="HomeRecentlyViewedTextDiv">
                                <p className="HomeRecentlyViewedText">
                                    Recently Viewed
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeRow6Col2">
                        {wallcovering ? (
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={[
                                    "desktop",
                                    "tablet",
                                    "mobile",
                                ]}
                            >
                                {wallcovering.map((data) => (
                                    <div
                                        key={data.id}
                                        className="HomeRecentlyViewedImageDivSec"
                                    >
                                        <div className="HomeRecentlyViewedImageDiv">
                                            <img
                                                src={data.images[0].src}
                                                alt={data.name}
                                                className="HomeRecentlyViewedImage"
                                            />
                                            <div className="HomeRecentlyViewedTitleTextDiv">
                                                <p className="HomeRecentlyViewedTitleText">
                                                    {data.name}
                                                </p>
                                                <p className="HomeRecentlyViewedPriceText">
                                                    {
                                                        data.attributes[2]
                                                            .options[0]
                                                    }
                                                    / sq.ft
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
                <div className="HomeRow7">
                    <div className="HomeRow7Col1">
                        <div className="HomePagebgStripe">
                            <div className="HomeTestimonialsTextDiv">
                                <p className="HomeTestimonialsText">
                                    Testimonials
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeRow7Col2">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="home-testimoninals-carousel-container"
                            removeArrowOnDeviceType={[
                                "desktop",
                                "tablet",
                                "mobile",
                            ]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeTestimonialContainerDiv">
                                <div className="HomeCustomerDetailsDiv">
                                    <div className="HomeCustomerDetailsDivSub">
                                        <div className="HomeCustomerProfileImageDiv">
                                            <img
                                                src="https://www.color-name.com/color-image?c=9BA49E&desktop"
                                                alt="profile"
                                                className="HomeCustomerProfileImage"
                                            />
                                        </div>
                                        <div className="HomeCustomerNameDetailsDiv">
                                            <p className="HomeCustomerName">
                                                Customer Name
                                            </p>
                                            <p className="HomeCustomerTestimonial">
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HomeTestimonialProductDetailsDiv">
                                    <div className="HomeProductImageDiv">
                                        <img
                                            src={ProdImg}
                                            alt="product"
                                            className="HomeProductImage"
                                        />
                                        <div className="HomeProductDetailsDiv">
                                            <p className="HomeProductDetailsName">
                                                Product Name
                                            </p>
                                            <p className="HomeProductOtherFeatures">
                                                Other Features | Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="HomeRow8">
                    <div>
                        <p className="HomeFreeEBookDownloadSecTitle">
                            Free E book
                        </p>
                        <div className="HomeFreeEbookDownloadInputsDiv">
                            <p className="HomeFormFillingText">
                                Please fill the details and download E-book
                            </p>
                            <input
                                type="text"
                                placeholder="Name"
                                className="HomeFreeDownloadEBookNameInput"
                            />
                            <input
                                type="email"
                                className="HomeFreeDownloadEBookEmailInput"
                                placeholder="E mail ID"
                            />
                            <input
                                type="text"
                                className="HomeFreeDownloadEBookLocationInput"
                                placeholder="Location"
                            />
                            <input
                                type="tel"
                                className="HomeFreeDownloadEBookNumberInput"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                placeholder="Whatsapp Number"
                            />
                            <button className="HomeFreeDownloadEbookButton">
                                Download
                            </button>
                        </div>
                        <div className="HomeFreeEbookImageDiv">
                            <img
                                src={EbookImage}
                                alt="prod"
                                className="HomeFreeEbookImage"
                            />
                            <p className="HomeFreeEbookImageText">
                                How to choose the best for your need?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="HomeRow9">
                    <div className="HomeRow9Col1">
                        <div className="HomePagebgStripe">
                            <div className="HomeBlogsTitleTextDiv">
                                <p className="HomeBlogsTitleText">
                                    Blogs & Videos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeRow9Col2">
                        <div className="HomeBlogsShowcaseDiv">
                            <div className="HomeBlogShow1Div">
                                <img
                                    src={ProdImg}
                                    alt="product"
                                    className="HomeBlogShow1"
                                />
                                <p className="HomeBlogShow1Title">Blog Title</p>
                            </div>
                            <div className="HomeBlogShow2Div">
                                <img
                                    src={ProdImg}
                                    alt="product"
                                    className="HomeBlogShow2"
                                />
                                <p className="HomeBlogShow2Title">Blog Title</p>
                            </div>
                            <div className="HomeBlogShow3Div">
                                <img
                                    src={ProdImg}
                                    alt="product"
                                    className="HomeBlogShow3"
                                />
                                <p className="HomeBlogShow3Title">Blog Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="HomeBlogsShowMoreButtonDiv">
                        <button className="HomeShowMoreBtn">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
