import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLoginInfo } from "../utils/LoginInfo";

import "../css/navbar.css";

const NavigationBar = () => {
	const navigate = useNavigate();
	const [isMobile, setIsMobile] = useState(false);

	const handleMenu = () => {
		setIsMobile(!isMobile);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		toast.info("Logged Out!");
		navigate("/");
		return <Navigate to="/login"></Navigate>;
	};

	return (
		<nav className={`navbar ${isMobile ? "navbar-mobile" : ""}`}>
			<div className="navbar-logo" onClick={handleMenu}>
				<Link to="/">
					<h3>{getLoginInfo()?.firstName}</h3>
				</Link>
				<div className="navbar-mobile-icon">{isMobile ? "✕" : "▥"}</div>
			</div>
			<ul className={`navbar-links ${isMobile ? "active" : ""}`}>
				<li className="navbar-item">
					<Link to="/">
						<div className="navbar-link">Home</div>
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/user">
						<div className="navbar-link">User</div>
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/">
						<div className="navbar-link" onClick={handleLogout}>
							Logout
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
