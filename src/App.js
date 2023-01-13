import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import axios from "axios";
import { useState } from "react";
import ListContact from "./components/ListContact";
import EditContact from "./components/EditContact";

function App() {
  const API = "http://localhost:8001/contacts";

  const [contact, setContact] = useState([]);
  const [soloContact, setSoloContact] = useState({
    name: "",
    surname: "",
    number: "",
    image: "",
  });

  function addContact(newContact) {
    axios.post(API, newContact);
  }

  async function getContact() {
    const { data } = await axios.get(API);
    setContact(data);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContact();
  }

  async function getSoloContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setSoloContact(data);
  }

  async function updateEditedContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContact();
  }

  return (
    <div className="App">
      <Link to="/addContact">
        <button type="button" class="btn btn-outline-warning mt-5">
          Add New Contact
        </button>
      </Link>
      <Link to="/editContact"></Link>
      <Link to="/listContact">
        <button type="button" class="btn btn-outline-warning mt-5 ms-2">
          Show List Contact
        </button>
      </Link>
      <Routes>
        <Route
          path="/addContact"
          element={<AddContact addContact={addContact} contact={contact} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              soloContact={soloContact}
              getSoloContact={getSoloContact}
              updateEditedContact={updateEditedContact}
            />
          }
        ></Route>
        <Route
          path="/listContact"
          element={
            <ListContact
              getContact={getContact}
              contact={contact}
              deleteContact={deleteContact}
              updateEditedContact={updateEditedContact}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
