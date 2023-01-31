import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getListContact,
} from "../utils/redux/actions/contactAction";

const AddContact = () => {
  const dispatch = useDispatch();
  const { addContactResult } = useSelector((state) => state.ContactReducer);

  const [name, setName] = useState("");
  const [nohp, setNohp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1. masuk handle submit");
    dispatch(addContact({ name, nohp }));
  };

  useEffect(() => {
    if (addContactResult) {
      dispatch(getListContact());
    }
  }, [addContactResult, dispatch]);

  return (
    <div>
      <h4>Add Contact</h4>
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
