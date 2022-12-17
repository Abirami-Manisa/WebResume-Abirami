import React, { Dispatch, SetStateAction, useState } from "react";
import Fade from "react-reveal";
import { Modal } from "react-bootstrap";
import Data from "../assets/resumeData.json";

import proj1 from "../assets/images/portfolio/01.jpg";
import proj2 from "../assets/images/portfolio/02.jpg";

import "../css/default.css";

let id = 0;

const Portfolio: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState("");
  if (!Data) return null;

  function setModal(name: string, source: string) {
    console.log("Inside");
    setShowModal(true);
    setImage(source);
    setImageName(name);
  }

  return (
    <>
      {showModal && (
        <PopUp
          showModal={showModal}
          setShowModal={setShowModal}
          image={image}
          name={imageName}
        />
      )}
      <section id="works" style={{background:"#fffaf0"}}>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="columns collapsed">
              <h3>Some of My Works...</h3>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div key={id++} className="columns portfolio-item">
                  <div className="item-wrap">
                    <img
                      id="ems"
                      alt="Employee Management System"
                      src={proj1}
                      onClick={() =>
                        setModal("Employee Management System", proj1)
                      }
                    />
                    <div style={{ textAlign: "center" }}>
                      Employee Management System
                    </div>
                  </div>
                </div>
                <div key={id++} className="columns portfolio-item">
                  <div className="item-wrap">
                    <img
                      id="wr"
                      alt="Web Resume"
                      src={proj2}
                      onClick={() => setModal("Web Resume", proj2)}
                    />
                    <div style={{ textAlign: "center" }}>Web Resume</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Portfolio;

interface PopupProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  image: string;
  name: string;
}
const PopUp: React.FC<PopupProps> = (props: PopupProps) => {
  function handleClose() {
    props.setShowModal(false);
  }
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img id={props.name} alt={props.name} src={props.image} />
        </Modal.Body>
      </Modal>
    </>
  );
};
