export const API = {
	AUTH: {
		JWT: "/api/auth/jwt",
		LOGIN: "/api/auth/login",
		REGISTER: "/api/auth/register",
	},
	USER: {
		UUID: (uuid) => {
			return "/api/user/" + uuid;
		},
		BASIC: "/api/user/basicdata",
	},
	FILE: {
		UPLOAD: "/api/file/upload",
	},
};
