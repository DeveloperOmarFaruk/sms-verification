import React, { useState } from "react";
import "./Dashboard.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  // Token Function
  const [showToken, setShowToken] = useState(false);

  const handleCloseToken = () => setShowToken(false);
  const handleShowToken = () => setShowToken(true);

  // Edit function
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  return (
    <>
      <section className="dashboard-container">
        <div className="dashboard-title">
          <h3>User Dashboard</h3>
          <button onClick={handleShowEdit}>Edit</button>
        </div>

        <div className="dashboard-data">
          <div className="dashboard-data-user left-data-user">
            <p>
              <span>Name:</span> Mr. Abdul Alim
            </p>
            <p>
              <span>Email:</span> abdule@gmail.com
            </p>
            <p>
              <span>Balance:</span> $500
            </p>
            <p>
              <span>Last Login time:</span> 11:15 Am 12/10/2021
            </p>
            <p>
              <span>Last login IP:</span> 192.168.112.111
            </p>
          </div>

          <div className="dashboard-data-user right-data-user">
            <h4>View Login time</h4>
            <p>15:20 Pm 13/12/2022</p>
            <p>15:20 Pm 13/12/2022</p>
            <p>15:20 Pm 13/12/2022</p>
            <p>15:20 Pm 13/12/2022</p>
            <p>15:20 Pm 13/12/2022</p>
            <p>15:20 Pm 13/12/2022</p>
          </div>
        </div>

        <div className="dashboard-token-container">
          <div className="dashboard-token" onClick={handleShowToken}>
            <h2>Token</h2>
            <div className="dashboard-token-show">
              <p>SMSCODES.IO</p>
              <i className="fas fa-eye"></i>
            </div>
          </div>

          <div className="dashboard-token" onClick={handleShowToken}>
            <h2>Token</h2>
            <div className="dashboard-token-show">
              <p>5 SIM.NET</p>
              <i className="fas fa-eye"></i>
            </div>
          </div>

          <div className="dashboard-token" onClick={handleShowToken}>
            <h2>Token</h2>
            <div className="dashboard-token-show">
              <p>PVAPINS.COM</p>
              <i className="fas fa-eye"></i>
            </div>
          </div>

          <div className="dashboard-token" onClick={handleShowToken}>
            <h2>Token</h2>
            <div className="dashboard-token-show">
              <p>SMSHUB.ORG</p>
              <i className="fas fa-eye"></i>
            </div>
          </div>

          <div className="dashboard-token" onClick={handleShowToken}>
            <h2>Token</h2>
            <div className="dashboard-token-show">
              <p>SMS-MAN.COM</p>
              <i className="fas fa-eye"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          className="token-input"
          placeholder="Enter Update Name"
        />
        <input
          type="email"
          className="token-input"
          placeholder="Enter Update Email"
        />
        <input
          type="password"
          className="token-input"
          placeholder="Enter New Password"
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button
            style={{ color: "#ffdd40", backgroundColor: "#1f5156" }}
            onClick={handleCloseEdit}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Token Modal */}
      <Modal show={showToken} onHide={handleCloseToken}>
        <Modal.Header closeButton>
          <Modal.Title>Token</Modal.Title>
        </Modal.Header>
        <input type="text" className="token-input" />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseToken}>
            Cancel
          </Button>
          <Button
            style={{ color: "#ffdd40", backgroundColor: "#1f5156" }}
            onClick={handleCloseToken}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;
