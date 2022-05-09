import * as api from "../../api/parcel/index";
import { parcelTypes } from "../constants/parcelTypes";

export const fetchParcels = () => async (dispatch) => {
  try {
    const response = await api.fetchAllParcels();
    dispatch({ type: parcelTypes.FETCH_PARCELS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchParcel = (id) => async (dispatch) => {
  try {
    const response = await api.fetchOneParcel(id);

    dispatch({ type: parcelTypes.SELECT_PARCEL, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewParcel = (newParcel) => async (dispatch) => {
  try {
    const response = await api.createParcel(newParcel);

    dispatch({ type: parcelTypes.CREATE_PARCEL, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAParcel = (id) => async (dispatch) => {
  try {
    await api.deleteParcel(id);

    dispatch({ type: parcelTypes.DELETE_PARCEL, payload: id });
  } catch (error) {
    console.log(error);
  }
};
