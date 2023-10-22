import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AXIOS from "../axios/custom_axios";
import { API } from "../api/api_constants";
import NavigationBar from "../components/NavBar";

const Home = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({}); // we are getting back an object from our api

	const display = async (ignore) => {
		try {
			const token = localStorage.getItem("token");
			const bearerToken = `Bearer ${token}`;

			const { data } = await AXIOS.get(API.USER.BASIC, {
				headers: { Authorization: bearerToken },
			});

			setUserData(data);
		} catch (error) {
			console.log(error);
			toast.info(error.response.data.msg || error.message || error.name);
		}
	};
	useEffect(() => {
		display();
	}, []);

	const [file, setFile] = useState(null);
	const [fileName, setFileName] = useState("");
	const [message, setMessage] = useState("");

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
		setFileName(selectedFile.name);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		await AXIOS.post(API.FILE.UPLOAD, formData).then((response) => {
			setMessage(response.data.message);
		});
	};

	return (
		<>
			<NavigationBar />
			<div style={{ margin: "20px" }}>
				<h1>Welcome to Home Page</h1>
				<div>
					<form onSubmit={handleSubmit}>
						{file ? (
							<label>Selected file: {fileName}</label>
						) : (
							<label>
								<button
									type="button"
									className="active-btn"
									onClick={() =>
										document
											.getElementById("file-input")
											.click()
									}
								>
									Select file
								</button>
							</label>
						)}
						<input
							type="file"
							name="file"
							id="file-input"
							onChange={handleFileChange}
							style={{ display: "none" }}
						/>

						<button type="submit">Submit</button>
					</form>
					{message && <div>{message}</div>}
				</div>

				<h2>{userData.firstName}</h2>
				<h2>{userData.lastName}</h2>
				<h2>{userData.uuid}</h2>
				<h2>{userData.email}</h2>
			</div>
		</>
	);
};

export default Home;
