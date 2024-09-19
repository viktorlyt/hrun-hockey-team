import React, { useState, useEffect } from "react";
import { getFormattedDate } from "../../utils/functions";

const OrderCard = ({ order }) => {
  console.log("order", order);
  return (
    <div className="info-card">
      <table>
        <thead>
          <tr className="b2">
            <th>Order</th>
            <th>Total</th>
            <th>Order placed on</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="b2">
          <tr>
            <td className="order-items">
              {order.items
                ? order.items.map((i) => (
                    <div key={i.productId} className="title">
                      <h5>
                        {i.variant.color} {i.name} - {i.category} - $
                        {i.variant.price}
                      </h5>
                      <h5>x{i.quantity}</h5>
                    </div>
                  ))
                : order.registrations.map((r) => (
                    <div key={r.groupId} className="title">
                      <h5>
                        {r.groupName} ({r.groupMinAge} - {r.groupMaxAge} years
                        old)
                      </h5>
                      <h5>x1</h5>
                    </div>
                  ))}
            </td>
            <td>${order.totalAmount}</td>
            <td>{getFormattedDate(order.createdAt, false)}</td>
            <td className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrderCard;
