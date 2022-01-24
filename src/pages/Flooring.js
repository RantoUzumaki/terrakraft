import { useState, useEffect } from "react";
import { api } from "./woocommerce";
import "../css/flooring.css";
import { useNavigate } from "react-router-dom"

function Flooring() {
    const [flooring, setFlooring] = useState();
	let Router = new useNavigate()

    useEffect(() => {
        const parsedata = {
            page: 1,
            per_page: 12,
            category: 131,
            order: "asc",
            orderby: "title",
        };

        async function getProducts() {
            api.get("products", parsedata).then((res) => {
                setFlooring(res.data);
            });
        }

        getProducts();
    }, []);

    function getProductDetails(e) {
		Router("/product/single-product", e.target.id)
    }

    return (
        <div className="FlooringMainRow">
            <div className="FlooringCenteredCol">
                <div className="FlooringTitleHeadDiv">
                    <p className="FlooringTitle">Flooring Category</p>
                </div>
                <div className="FlooringSeperatorDiv"></div>
                {/* <div className="FlooringFilterDiv">
					<div className="FlooringFilterSubDiv">
						<p className="FlooringFilterText">Filters</p> */}
                {/* <details className="FlooringShadeName">
							<summary className="FlooringShadeTitle">Shade Name</summary>
							<p>Shade Name 1</p>
							<p>Shade Name 2</p>
							<p>Shade Name 3</p>
							<p>Shade Name 4</p>
						</details>
						<details className="FlooringRollAreaHead">
							<summary className="FlooringRollAreaTitleHead">Roll Area</summary>
							<p>Roll Area 1</p>
							<p>Roll Area 2</p>
							<p>Roll Area 3</p>
							<p>Roll Area 4</p>
						</details>
						<details className="FlooringSurfaceName">
							<summary className="FlooringSurfaceTitle">Surface</summary>
							<p>Surface 1</p>
							<p>Surface 2</p>
							<p>Surface 3</p>
							<p>Surface 4</p>
						</details>
						<details className="FlooringPriceName">
							<summary className="FlooringPriceTitle">Price</summary>
							<p>Price 1</p>
							<p>Price 2</p>
							<p>Price 3</p>
							<p>Price 4</p>
						</details> */}
                {/* </div> */}
                {/* </div> */}
                {flooring ? (
                    <div className="FlooringProductsListingDiv">
                        {flooring.map((data) => (
                            <div key={data.id} className="FlooringProductDiv">
                                <div
                                    onClick={getProductDetails}
                                    className="FlooringImageDiv"
                                >
                                    <img
                                        id={data.id}
                                        src={data.images[0].src}
                                        alt=""
                                        className="FlooringProductImage"
                                    />
                                </div>
                                <div className="FlooringProductNumberArea">
                                    <div className="FlooringDesignNumberDiv">
                                        <p className="FlooringDesignNumberTitle">
                                            Design Number
                                        </p>
                                        <p className="FlooringDesignNumber">
                                            9594A
                                        </p>
                                    </div>
                                    <div className="FlooringRollAreaDiv">
                                        <p className="FlooringRollAreaTitle">
                                            Roll Area
                                        </p>
                                        <p className="FlooringRollArea">15mm</p>
                                    </div>
                                </div>
                                <div className="FlooringProductTitleHeadDiv">
                                    <p className="FlooringProductTitleHead">
                                        {data.name}
                                    </p>
                                </div>
                                <div className="FlooringProductPricePersqftDiv">
                                    <p className="FlooringProductPersqft">
                                        {data.attributes[2].options[0]}/ sq.ft
                                    </p>
                                </div>
                                <div className="FlooringProductBtnsDiv">
                                    <button className="FlooringAddtocartbtn">
                                        ADD TO CART
                                    </button>
                                    <button className="FlooringAddtowishlistbtn">
                                        <i className="bi bi-suit-heart-fill"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>loading</p>
                )}
            </div>
        </div>
    );
}

export default Flooring;
