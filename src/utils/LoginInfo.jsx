import jwt_decode from "jwt-decode";

export const getLoginInfo = () => {
	const token = localStorage.getItem("token");
	if (token != null) {
		const userInfo = jwt_decode(token);
		//console.log(userInfo);
		return userInfo;
	} else {
		return null;
	}
};
