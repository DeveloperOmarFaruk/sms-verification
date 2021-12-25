import React, { useState } from "react";
import "./Order.css";
import "../Product/Product.css";

const Order = () => {
  return (
    <>
      <section className="product-section">
        <div className="product-data-table">
          <table class="table">
            <thead>
              <th>Id</th>
              <th>Phone</th>
              <th>Operator</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Exp. Date</th>
              <th>Create Date</th>
              <th>Country</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>
              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Order;
