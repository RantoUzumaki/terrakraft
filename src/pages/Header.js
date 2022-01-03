import { Component } from "react";
import "../css/header.css"

import logoWhite from "../assets/logo-white.png"
import logoBlack from "../assets/logo-black.png"

export class Header extends Component {
	render() {
		return (
			<div>
				<div className="full-width-header">
					<div className="header-bg-img">
						<div className="logo-icon-section">
							<div className="logo-icon-center">
								<div className="logo-img">
									<img className="logo" src={logoWhite} alt="Logo" />
								</div>
								<div className="four-icon-sec">
									<div className="search-icon">
										<span className="search-icon-span"><i className="bi bi-search "></i></span>
									</div>
									<div className="cart-icon">
										<span className="cart-icon-span"><i className="bi bi-cart-dash "></i></span>
									</div>
									<div className="wishlist-icon">
										<span className="wishlist-icon-span"><i className="bi bi-heart-fill "></i></span>
									</div>
									<div className="profile-icon">
										<span className="profile-icon-span"><i className="bi bi-person-fill "></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="header-navbar">
						<div className="navbar-center">
							<div className="flooring-btn">
								<a className="flooring" href="#">Flooring</a>
							</div>
							<div className="wallcovering-btn">
								<a className="wallcovering" href="#">Wallcovering</a>
							</div>
							<div className="store-locater-btn">
								<a className="store-locater" href="#">Store Locater</a>
							</div>
							<div className="design-your-room-btn">
								<a className="design-your-room" href="#">Design your room</a>
							</div>
							<div className="partner-with-us-btn">
								<a className="partner-with-us" href="#">Partner with us</a>
							</div>
							<div className="downloads-btn">
								<a className="downloads" href="#">Downloads</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}