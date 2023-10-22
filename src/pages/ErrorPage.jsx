import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/");
		toast.error("Page donot exist!");
	}, []);
	return (
		<>
			<h2>Error Encountered!</h2>
			<button>
				<a href="/">Go Back</a>
			</button>
		</>
	);
};

export default ErrorPage;
