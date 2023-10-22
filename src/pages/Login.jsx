import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AXIOS from "../axios/custom_axios";
import { API } from "../api/api_constants";
import { getLoginInfo } from "../utils/LoginInfo";

import "../css/login_signup.css";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const loginApp = async () => {
    const { email, password } = user;
    if (email == "" || password == "") {
      toast.info("Please fill the information");
      return;
    }
    try {
      const response = await AXIOS.post(API.AUTH.LOGIN, {
        email,
        password,
      });

      // Setting Up recieved token for the user
      //console.log(response);

      localStorage.setItem("token", response.data.token);
      dispatchEvent(new Event("storage"));

      const firstName = getLoginInfo()?.firstName;
      toast.success(`Welcome Back! ${firstName}`);

      navigate("/");
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);

      toast.warn(response.data.message || "Login Failed");
    }
  };
  return (
    <div className="main">
      <div>
        <h3 style={{ display: "grid", justifyContent: "center" }}>
          Account Login.
        </h3>
        <div className="container">
          <form>
            <div className="inputFields">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="chad@mail.com"
              />
            </div>
            <div className="inputFields">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="off"
                placeholder="********"
              />
            </div>
            <div>
              <button className="active-btn" onClick={loginApp} type="button">
                <span>Login</span>
              </button>
            </div>
          </form>
          <span>
            Haven't Registered Yet?
            <a
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Sign Up!
            </a>
          </span>

          <span>
            <a href="https://github.com/axyut/resume_maker.git" target="_blank">
              About?
            </a>
          </span>
          <span>
            <a href={import.meta.env.VITE_BASE_URL + "/api"} target="_blank">
              API?
            </a>
          </span>
        </div>
      </div>
      <div className="container">
        <h1>Example for different tags... BOSC</h1>
        <h2>BOSC</h2>
        <h3>Birendra Open source club</h3>
        <span>Random text</span>
        <label>Random text</label>
        <p>Random text</p>
      </div>
    </div>
  );
};

export default Login;
