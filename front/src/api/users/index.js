import axios from "axios";

const userUrl = "http://localhost:3005/users";

export const fetchUsers = () => axios.get(userUrl);

export const createAUser = (newUser) => axios.post(userUrl, newUser)

export const logUser = (data) => axios.post(`${userUrl}/login`, data)

export const getOneUser = (id) => axios.get(`${userUrl}/${id}`);

