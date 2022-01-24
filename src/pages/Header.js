import "../css/header.css";
import logoWhite from "../assets/logo-white.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {

	let Router = new useNavigate()
	function flooringPage() {
		Router("/product/flooring")
	}

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
                                        <span className="header-cart-icon-span">
                                            <i className="header-bi bi-cart-dash "></i>
                                        </span>
                                    </Link>
                                </div>
                                <div className="header-wishlist-icon">
                                    <span className="header-wishlist-icon-span">
                                        <i className="header-bi bi-heart-fill"></i>
                                    </span>
                                </div>
                                <div className="header-profile-icon header-dropdown">
                                    <span className="header-profile-icon-span">
                                        <i className="header-bi bi-person-fill "></i>
                                    </span>
                                    <div className="header-dropdown-content">
                                        <Link to="/profile">Profile</Link>
                                        { !localStorage.getItem("token") ? (
                                            <Link to="/login">Login</Link>
                                        ) : (
                                            <Link to="/logout">Logout</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-header-navbar">
                    <div className="header-navbar-center">
                        <div className="header-flooring-btn">
                            <button className="header-flooring" onClick={flooringPage}>
                                Flooring
                            </button>
                        </div>
                        <div className="header-wallcovering-btn">
                            <button className="header-wallcovering">
                                Wallcovering
                            </button>
                        </div>
                        <div className="header-store-locater-btn">
                            <button className="header-store-locater">
                                Store Locater
                            </button>
                        </div>
                        <div className="header-design-your-room-btn">
                            <button className="header-design-your-room">
                                Design your room
                            </button>
                        </div>
                        <div className="header-partner-with-us-btn">
                            <button className="header-partner-with-us">
                                Partner with us
                            </button>
                        </div>
                        <div className="header-downloads-btn">
                            <button className="header-downloads">
                                Downloads
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
