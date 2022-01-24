import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/carousel_bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselTemplate() {
    const RightarrowStyles: CSSProperties = {
        position: "absolute",
        top: "40%",
        right: "10%",
        bottom: "auto",
        zIndex: 2,
    };

    const LeftarrowStyles: CSSProperties = {
        position: "absolute",
        top: "40%",
        left: "10%",
        bottom: "auto",
        zIndex: 2,
    };

    const IndicatorStyle: CSSProperties = {
        cursor: "pointer",
        margin: "0 10px",
        color: "white",
    };

    const carouselText: CSSProperties = {
        position: "absolute",
        bottom: "30%",
        right: "0",
        width: "50%",
        color: "white",
        fontSize: "26px",
        textAlign: "start",
        fontWeight: "600",
        letterSpacing: "1.5px",
    };

    const carouselKnowmoreBtn: CSSProperties = {
        position: "absolute",
        bottom: "20%",
        right: "38%",
        width: "12%",
        color: "black",
        fontSize: "18px",
        fontWeight: "600",
        background: "#ffd200",
        border: 0,
        height: "35px",
    };

    return (
        <div>
            <Carousel
                autoPlay
                interval={5000}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                renderArrowNext={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                ...RightarrowStyles,
                                background: "white",
                                width: "40px",
                                height: "40px",
                                borderRadius: "100%",
                                border: "0",
                                fontSize: "22px",
                                fontWeight: "bolder",
                            }}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    )
                }
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                ...LeftarrowStyles,
                                background: "white",
                                width: "40px",
                                height: "40px",
                                borderRadius: "100%",
                                border: "0",
                                fontSize: "22px",
                                fontWeight: "bolder",
                            }}
                        >
                            <i className="bi bi-chevron-left"></i>
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const style = isSelected
                        ? { ...IndicatorStyle, color: "#e3e3e3" }
                        : { ...IndicatorStyle };
                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                            <i className="bi bi-circle-fill"></i>
                        </span>
                    );
                }}
            >
                <div>
                    <img src={Image1} alt="image1" />
                    <p style={{ ...carouselText }}>
                        Environment friendly products,
                        <br />
                        The Terrakraft way.
                    </p>
                    <button style={{ ...carouselKnowmoreBtn }} type="button">
                        KNOW MORE
                    </button>
                </div>
                <div>
                    <img src={Image1} alt="image1" />
                    <p style={{ ...carouselText }}>
                        Environment friendly products,
                        <br />
                        The Terrakraft way.
                    </p>
                    <button style={{ ...carouselKnowmoreBtn }} type="button">
                        KNOW MORE
                    </button>
                </div>
                <div>
                    <img src={Image1} alt="image1" />
                    <p style={{ ...carouselText }}>
                        Environment friendly products,
                        <br />
                        The Terrakraft way.
                    </p>
                    <button style={{ ...carouselKnowmoreBtn }} type="button">
                        KNOW MORE
                    </button>
                </div>
                <div>
                    <img src={Image1} alt="image1" />
                    <p style={{ ...carouselText }}>
                        Environment friendly products,
                        <br />
                        The Terrakraft way.
                    </p>
                    <button style={{ ...carouselKnowmoreBtn }} type="button">
                        KNOW MORE
                    </button>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselTemplate;
