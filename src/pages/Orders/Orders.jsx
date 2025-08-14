import React, { useEffect } from "react";
import axios from "axios";
import { assests } from "../../assets/assests.jsx";
function Orders() {
  const [data, setData] = React.useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/orders/all");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateStatus = async (event, orderId) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/orders/status/${orderId}?status=${event.target.value}`
      );
      if (response.status === 200) {
        await fetchOrders();
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
          <table className="table table-responsive">
            <tbody>
              {data.map((order, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={assests.logo}
                      alt=""
                      style={{ width: "48px", height: "48px" }}
                    />
                  </td>
                  <td>
                   
                    <div>
                       {order.orderedItems.map((item, index) => {
                      if (index == order.orderedItems.length - 1) {
                        return item.name + "X" + item.quantity;
                      } else {
                        return item.name + "X" + item.quantity + ", ";
                      }
                    })}
                    </div>
                    <div>
                      {order.userAddress}
                    </div>
                  </td>
                  <td>&#x20B9;{(order.amount / 100).toFixed(2)}</td>
                  <td>Items: {order.orderedItems.length}</td>
                  <td>
                    <select
                      name=""
                      id=""
                      className="form-control"
                      onChange={(event) => updateStatus(event, order.id)}
                      value={order.orderStatus}
                      
                    >
                      <option value="Food Preparing">Food Preparing</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
