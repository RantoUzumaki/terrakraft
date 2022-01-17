import "../css/header.css";

import logoWhite from "../assets/logo-white.png";

import { Link } from "react-router-dom";

function Header() {
	
    function goToCart() {}

    return (
        <div>
            <div className="header-full-width-header">
                <div className="header-header-bg-img">
                    <div className="header-logo-icon-section">
                        <div className="header-logo-icon-center">
                            <div className="header-logo-img">
                                <Link to="/">
                                    <img
                                        className="header-logo"
                                        src={logoWhite}
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div className="header-four-icon-sec">
                                <div className="header-search-icon">
                                    <span className="header-search-icon-span">
                                        <i className="header-bi bi-search "></i>
                                    </span>
                                </div>
                                <div className="header-cart-icon">
                                    <Link to="/cart">
                                        <span
                                            onClick={goToCart}
                                            className="header-cart-icon-span"
                                        >
                                            <i className="header-bi bi-cart-dash "></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className="header-wishlist-icon">
                                    <span className="header-wishlist-icon-span">
                                        <i className="header-bi bi-heart-fill "></i>
                                    </span>
                                </div>
                                <div className="header-profile-icon">
                                    <span className="header-profile-icon-span">
                                        <i className="header-bi bi-person-fill "></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-header-navbar">
                    <div className="header-navbar-center">
                        <div className="header-flooring-btn">
                            <a className="header-flooring" href="#">
                                Flooring
                            </a>
                        </div>
                        <div className="header-wallcovering-btn">
                            <a className="header-wallcovering" href="#">
                                Wallcovering
                            </a>
                        </div>
                        <div className="header-store-locater-btn">
                            <a className="header-store-locater" href="#">
                                Store Locater
                            </a>
                        </div>
                        <div className="header-design-your-room-btn">
                            <a className="header-design-your-room" href="#">
                                Design your room
                            </a>
                        </div>
                        <div className="header-partner-with-us-btn">
                            <a className="header-partner-with-us" href="#">
                                Partner with us
                            </a>
                        </div>
                        <div className="header-downloads-btn">
                            <a className="header-downloads" href="#">
                                Downloads
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
