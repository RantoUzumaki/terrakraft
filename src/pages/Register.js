import { useNavigate } from "react-router-dom";
import {api} from "./woocommerce";

function Register() {
    let Redirect = useNavigate();
	
	const RegisterData = {
		username: document.getElementById("UserName").value,
		email: document.getElementById("Usermail").value,
		password: document.getElementById("PassWord").value,
	};

    function RegisterSubmit(e) {
		// api.post("customers", { header: {"Authorization":""} }, RegisterData).then((res)=>{console.log(res)})
    }

    return (
        <div>
            {localStorage.getItem("username") ? (
                Redirect("/login")
            ) : (
                <div>
                    <p>Login</p>
                    <input type="text" defaultValue={"test"} name="Username" id="UserName" />
                    <br />
					<input type="mail" defaultValue={"test@gmail.com"} name="Usermail" id="Usermail" />
                    <br />
                    <input type="password" defaultValue={"123456"} name="Password" id="PassWord" />
                    <br />
                    <button type="button" onClick={RegisterSubmit}>
					Register
                    </button>
                </div>
            )}
        </div>
    );
}

export default Register;
