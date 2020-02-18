import React, { useState } from "react";
import "../components/Publish/Publish.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Publish({ user }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [files, setFiles] = useState();

  return (
    <div className="background-beige">
      <div className="publish-all">
        <h3>Déposer Une annonce</h3>
        <form
          className="publish-offer"
          onSubmit={async event => {
            event.preventDefault();
            if (user) {
              const formData = new FormData();
              formData.append("title", title);
              formData.append("description", description);
              formData.append("price", price);
              const keys = Object.keys(files);
              for (let key in keys) {
                formData.append("pictures", files[key]);
              }
              console.log("1");
              try {
                console.log("2");
                const response = await axios.post(
                  "https://leboncoin-2003-claire.herokuapp.com/offer/publish",
                  formData,
                  {
                    headers: {
                      Authorization: "Bearer " + user.token,
                      "Content-Type": "multipart/form-data"
                    }
                  }
                );
                console.log("3");
                setTitle("");
                setDescription("");
                setPrice("");
                setFiles("");
                history.push("/");
              } catch (error) {
                console.log(error);
              }
            } else {
              return history.push("/user/sign_up");
            }
          }}
        >
          <label>Titre de l'annonce</label>
          <input
            className="publish-input"
            type="text"
            value={title}
            name="title"
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
          <label>Texte de l'annonce</label>
          <textarea
            className="publish-input"
            type="text"
            value={description}
            name="description"
            onChange={event => {
              setDescription(event.target.value);
            }}
          />
          <label>Prix</label>
          <span>
            <input
              className="publish-input publish-input-price"
              type="text"
              value={price}
              name="price"
              onChange={event => {
                setPrice(event.target.value);
              }}
            />
            <label> €</label>
          </span>
          <label className="publish-label">Photo</label>
          <input
            multiple="multiple"
            className="publish-select-file"
            type="file"
            onChange={event => {
              setFiles(event.target.files);
            }}
          />
          <button type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
}

export default Publish;
