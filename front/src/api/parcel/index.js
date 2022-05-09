import axios  from "axios";

const url = "http://localhost:3005/parcels";

export const fetchAllParcels = () => axios.get(url)
export const fetchOneParcel = (id) => axios.get(`${url}/${id}/`);
export const createParcel = (newParcel) => axios.post(url, newParcel) 

export const deleteParcel =  (id)  => axios.delete(`${url}/${id}`)