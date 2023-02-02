import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  detailContact,
  getListContact,
} from "../utils/redux/actions/contactAction";

const ListContact = () => {
  const {
    getListContactResult,
    getListContactLoading,
    getListContactError,
    deleteContactResult,
  } = useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListContact
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <>
      <h4>ListKontak</h4>
      {getListContactResult ? (
        getListContactResult.map((contact) => (
          <p key={contact.id}>
            {" "}
            {contact.name} - {contact.nohp}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(detailContact(contact))}
            >
              Edit
            </button>
          </p>
        ))
      ) : getListContactLoading ? (
        <p>Loading....</p>
      ) : (
        <p>{getListContactError ? getListContactError : "Data Kosong"}</p>
      )}
    </>
  );
};

export default ListContact;
