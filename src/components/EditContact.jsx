import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditContact = ({ soloContact, getSoloContact, updateEditedContact }) => {
  const [name, setName] = useState(soloContact.name);
  const [surname, setSurname] = useState(soloContact.surname);
  const [number, setNumber] = useState(soloContact.number);
  const [image, setImage] = useState(soloContact.image);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSoloContact(params.id);
  }, []);

  useEffect(() => {
    setName(soloContact.name);
    setSurname(soloContact.surname);
    setNumber(soloContact.number);
    setImage(soloContact.image);
  }, [soloContact]);

  function handleSave() {
    let obj = {
      name,
      surname,
      number,
      image,
    };
    updateEditedContact(params.id, obj);
    setName("");
    setSurname("");
    setNumber("");
    setImage("");
    navigate("/listContact");
  }

  return (
    <div>
      <div className="container">
        <h2 class="mt-5">Update Contact Info</h2>
        <div class="mb-3 row mt-5">
          <label class="col-sm-2 col-form-label start">Name:</label>
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
          <label class="col-sm-2 col-form-label start">Surname:</label>
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
          <label class="col-sm-2 col-form-label start">Phone Number:</label>
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
          <label class="col-sm-2 col-form-label start">Image Link:</label>
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
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default EditContact;
