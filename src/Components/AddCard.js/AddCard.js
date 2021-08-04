
import React, { useState } from "react";
import { Button,Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [src, setSrc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      id: Math.random(),
      title,
      description,
      rate,
      src,
    }
    if (title && description && rate && src) {
        handleAdd(newMovie);
        setTitle("");
        setDescription("");
        setRate(0);
        setSrc("");
    } else {
      alert("all fiels shouldn be empty");
    }
  };
  return (
    <div  className="bouton3">
      <Button  className="add" variant="danger" onClick={handleShow}>
        Ajouter 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  className="Case">
          <Modal.Title>Ajouter un film</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Case">
          <form  onSubmit={handleSubmit}>
            title:
            <input id="case" 
              type="text"
              placeholder="entrer le titre"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="form-control"
            />
            description:
            <input id="case" 
              type="text"
              placeholder="entrer la description du film"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="form-control"
            />
            rate:
            <input id="case" 
              type="number"
              placeholder="enter movie rate"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
              className="form-control"
            />
            src:
            <input  id="case" 
              type="text"
              placeholder="enter le url de film"
              onChange={(e) => setSrc(e.target.value)}
              value={src}
              className="form-control"
            />
            <Button variant="danger" type="submit" onClick={handleClose}>
              Enregister
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer className="Case">
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
