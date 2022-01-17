import axios from "axios";
import { useNavigate } from "react-router-dom";
import { siteURL } from "./woocommerce";

function Login() {
    let Redirect = useNavigate();

    function loginSubmit(e) {
        const loginData = {
            username: document.getElementById("UserName").value,
            password: document.getElementById("PassWord").value,
        };

        axios
            .post(
                `${siteURL}/wp-json/jwt-auth/v1/token`,
                loginData,
                { withCredentials: true }
            )
            .then((res) => {
                if (undefined === res.data.token) {
                    alert(res.data.message);
                    return;
                }
                console.log(res);

                const { token, user_nicename, user_email } = res.data;

                localStorage.setItem("token", token);
                localStorage.setItem("username", user_nicename);
                localStorage.setItem("useremail", user_email);

                Redirect("/single-product");
            })
            .catch((error) => {
                console.log(error);
            });
		
    }

    return (
        <div>
            {localStorage.getItem("username") ? (
                Redirect("/single-product")
            ) : (
                <div>
                    <p>Login</p>
                    <input type="text" name="Username" id="UserName" />
                    <br />
                    <input type="password" name="Password" id="PassWord" />
                    <br />
                    <button type="button" onClick={loginSubmit}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default Login;
