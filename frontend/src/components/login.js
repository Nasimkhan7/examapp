import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../config";
import "./login.css";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";
import { useContext } from "react";

const Login = () => {
  const url = app_config.api_url;

  const { setLoggedin } = useContext(ProductContext);

  const loginForm = {
    email: "",
    password: "",
  };

  const loginsubmit = (value) => {
    console.log(value);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(url + "/user/backendlogin", reqOpt).then((res) => {
      if (res.status == 200) {
        console.log("login success");
        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          setLoggedin(true);
          window.location.replace("/dashboard");
        });
        // toast. success("Loggedin Successfully")

        Swal.fire({
          icon: "success",
          title: "Auto close alert ",
          text: "login success",
        });
      } else if (res.status == 300) {
        console.log("login failed");
        //toast.error("Login Failed");

        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "login failed",
        });
      }
    });
  };

  return (
      

    <div class="wait container-fluid mt-5 " >
        <div className="image">
          <img src="http://www.achieveyourbestlife.com/wp-content/uploads/2017/03/Your-Future-starts-here.jpg"alt=""/>

        </div>

      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card">
            <div class="card-body bg-info" my-card-body>
              <p class="h3 text-center  mt-3">Login</p>

              <Formik initialValues={loginForm} onSubmit={loginsubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <label for="Email " class="mt-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="Email"
                      class="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                    />

                    <label for="Password " class="mt-3">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                    />

                    <label class="checkbox mt-3">
                      <input
                        type="checkbox"
                        value="remember-me"
                        id="rememberMe"
                        name="rememberMe"
                      />{" "}
                      Remember me
                    </label>

                    <button
                      type="submit"
                      class="btn btn-outline-primary w-25 mt-5 text-end float-end text-center"
                    >
                      Login{" "}
                    </button>
                    

                    <NavLink
                      to="/signup"
                      class="text-muted  py-3"
                      style={{ display: "block" }}
                    >
                      Already Have an acount
                    </NavLink>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
