import "../css/footer.css"
import logo from "../assets/logo-white.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <img
                    className="footer__logo"
                    src={logo}
					alt="logo"
                />

                <h2>Address</h2>

                <address>
                    5534 Somewhere In.
                    <br /> The World 22193-10212
                </address>
                <div>
                    <p>Don't forget to follow us</p>
                    <div>
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <i
                            className="fab fa-facebook-square"
                            aria-hidden="true"
                        ></i>
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">CUSTOMER SUPPORT</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">FAQs</a>
                        </li>

                        <li>
                            <a href="#">Track My Order</a>
                        </li>

                        <li>
                            <a href="#">Delivery</a>
                        </li>

                        <li>
                            <a href="#">Returns</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">ABOUT US</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Get To Know Us</a>
                        </li>

                        <li>
                            <a href="#">Carrers</a>
                        </li>

                        <li>
                            <a href="#">Our Charities</a>
                        </li>

                        <li>
                            <a href="#">Our Values</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">COMPANY INFOS</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Affiliate</a>
                        </li>

                        <li>
                            <a href="#">B2B Section</a>
                        </li>

                        <li>
                            <a href="#">Review</a>
                        </li>

                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer