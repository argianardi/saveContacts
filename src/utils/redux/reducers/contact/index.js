import { GET_LIST_CONTACT, ADD_CONTACT } from "../../actions/contactAction";

const initialState = {
  // get request
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,

  // post request
  addContactResult: false,
  addContactLoading: false,
  addContactError: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };

    case ADD_CONTACT:
      console.log("4. masuk reducer");
      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default contact;
