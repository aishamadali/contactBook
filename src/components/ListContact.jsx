/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListContact = ({
  getContact,
  contact,
  deleteContact,
  getSoloContact,
}) => {
  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <div>
        <div className="container d-flex justify-content-between flex-wrap">
          {contact.map((item) => (
            <div key={item.id} class="card mt-5" style={{ width: "18rem" }}>
              <img
                src={`${item.image}`}
                class="card-img-top"
                alt="..."
                style={{ height: "250px" }}
              />
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{item.name}</li>
                  <li class="list-group-item">{item.surname}</li>
                  <li class="list-group-item">{item.number}</li>
                  <li class="list-group-item"></li>
                </ul>

                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => deleteContact(item.id)}
                >
                  DELETE
                </Button>
                <Link to={`/edit/${item.id}`}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ "margin-left": "5px" }}
                  >
                    EDIT
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListContact;
