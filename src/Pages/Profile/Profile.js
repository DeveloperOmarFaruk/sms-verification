import React, { useState } from "react";
import "./Profile.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  // Edit function
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  return (
    <>
      <section className="dashboard-container">
        <div className="dashboard-title">
          <h3>User Profile</h3>
          <button onClick={handleShowEdit}>Update Profile</button>
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
              <span>Phone:</span> +880 1736648160
            </p>
            <p>
              <span>Gender:</span> Male
            </p>
            <p>
              <span>Date of Birth:</span> 17 / 04 / 1998
            </p>
            <p>
              <span>Username:</span> omar181
            </p>
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
          type="number"
          className="token-input"
          placeholder="Enter Update Phone"
        />

        <select name="gender" className="input_field">
          <option value="female">Gender</option>
          <option value="male">Female</option>
          <option value="other">Male</option>
        </select>

        <input
          type="date"
          className="token-input"
          placeholder="Enter Update Date of Birth"
        />

        <input
          type="text"
          className="token-input"
          placeholder="Enter Update Username"
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
    </>
  );
};

export default Profile;
