import { parcelTypes } from "../constants/parcelTypes";

const initialState = {
  parcels: [],
};


export const parcelReducer = (state = initialState, action) =>{

switch (action.type) {
  case parcelTypes.GET_PARCELS:
    return { ...state, parcels: action.payload };

  case parcelTypes.FETCH_PARCELS:
    return { ...state, parcels: action.payload };

  case parcelTypes.CREATE_PARCEL:
    return { ...state, parcels: action.payload };

  case parcelTypes.DELETE_PARCEL:
    console.log(action.payload);
   const filterParcel = state.parcels.filter((parcel) => parcel.id !== action.payload);
   state = filterParcel;
   return state;

  default:
    return state;
}

}

export const selectedParcelReducer = (state = [{}], {type,payload}) => {

  switch (type) {
    case parcelTypes.SELECT_PARCEL:
     
    return{...state, ...payload}

    default:
      return state;
  }
}