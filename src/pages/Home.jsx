import React from "react";
import AddContact from "../components/AddContact";
import ListContact from "../components/ListContact";

const Home = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Save Contact App</h2>
      <AddContact />
      <hr />
      <ListContact />
    </div>
  );
};

export default Home;
