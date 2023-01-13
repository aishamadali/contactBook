import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    let newContact = {
      name,
      surname,
      number,
      image,
    };
    addContact(newContact);
    setName("");
    setSurname("");
    setNumber("");
    setImage("");
  }

  return (
    <div>
      <div className="container">
        <h2 class="mt-5">Your Contact Info</h2>
        <div class="mb-3 row mt-5">
          <label class="col-sm-2 col-form-label start">Your Name:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label start">Your Surname:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label start">
            Your Phone Number:
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label start">Your Image Link:</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
        </div>
        <Button variant="success" type="submit" onClick={handleSave}>
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddContact;
