import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getListContact,
  updateContact,
} from "../utils/redux/actions/contactAction";

const AddContact = () => {
  const dispatch = useDispatch();
  const { addContactResult, detailContactResult, updateContactResult } =
    useSelector((state) => state.ContactReducer);

  const [name, setName] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // update Contact
      dispatch(updateContact({ id, name, nohp }));
    } else {
      dispatch(addContact({ name, nohp }));
    }
  };

  useEffect(() => {
    if (addContactResult) {
      dispatch(getListContact());
      setName("");
      setNohp("");
    }
  }, [addContactResult, dispatch]);

  useEffect(() => {
    if (detailContactResult) {
      setName(detailContactResult.name);
      setNohp(detailContactResult.nohp);
      setId(detailContactResult.id);
    }
  }, [detailContactResult, dispatch]);

  useEffect(() => {
    if (updateContactResult) {
      dispatch(getListContact());
      setName("");
      setNohp("");
      setId("");
    }
  }, [updateContactResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Contact" : "Add Contact"}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="No HP...."
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
