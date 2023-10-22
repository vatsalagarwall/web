import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import NavigationBar from "../components/NavBar";

const User = () => {
	const navigate = useNavigate();

	return (
		<>
			<NavigationBar />
			<div style={{ margin: "20px" }}>
				<h1>Welcome to Users Page</h1>
			</div>
		</>
	);
};

export default User;
