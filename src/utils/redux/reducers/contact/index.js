import { GET_LIST_CONTACT } from "../../actions/contactAction";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      console.log("4. masuk reducer");
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default contact;
