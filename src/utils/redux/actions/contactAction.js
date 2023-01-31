import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";

export const getListContact = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios
      .get("http://localhost:2023/contacts")
      .then((response) => {
        // berhasil get api
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addContact = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post API
    axios
      .post("http://localhost:2023/contacts", data)
      .then((response) => {
        // berhasil post api
        console.log("3. Berhasil dapat data: ", response);
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal post api
        console.log("3. Gagal dapat data:", error.message);
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
