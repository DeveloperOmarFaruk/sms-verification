import React from "react";
import "./Friends.css";

const Friends = () => {
  return (
    <>
      <section className="product-section">
        <form className="form-search" method="get" action="#">
          <input type="search" name="search" placeholder="Search username" />
          <button type="submit">Search</button>
        </form>

        <div className="product-data-table">
          <table className="table">
            <thead>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="Id">1</td>
                <td data-label="Phone">omar181</td>
                <td data-label="Operator">developer.omarfaruk@gmail.com</td>
              </tr>
              <tr>
                <td data-label="Id">2</td>
                <td data-label="Phone">omar181</td>
                <td data-label="Operator">developer.omarfaruk@gmail.com</td>
              </tr>

              <tr>
                <td data-label="Id">3</td>
                <td data-label="Phone">omar181</td>
                <td data-label="Operator">developer.omarfaruk@gmail.com</td>
              </tr>

              <tr>
                <td data-label="Id">4</td>
                <td data-label="Phone">omar181</td>
                <td data-label="Operator">developer.omarfaruk@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Friends;
