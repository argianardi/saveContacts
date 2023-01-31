import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../utils/redux/actions/contactAction";

const ListContact = () => {
  const { getListContactResult, getListContactLoading, getListContactError } =
    useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListContact
    dispatch(getListContact());
  }, [dispatch]);

  return (
    <>
      <h4>ListKontak</h4>
      {getListContactResult ? (
        getListContactResult.map((contact) => (
          <p key={contact.id}>
            {" "}
            {contact.name} - {contact.nohp}
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
