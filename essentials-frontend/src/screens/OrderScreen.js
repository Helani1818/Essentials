import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  },[dispatch,orderId]);

    return loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : 
    (
        <div>
          <h1><center>THANK YOU FOR YOUR ORDER!</center></h1>
          <h1>Order #{order._id}</h1>
          <div className="row top"> 
            <div className="col-2">
              <ul>
                <li>
                  <div className="card card-body">
                    <h2>Shipping</h2>
                    <p>
                      <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                      <strong>Address: </strong> {order.shippingAddress.address},
                      {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                      ,{order.shippingAddress.country}
                    </p>
                    {order.isDelivered ? (
                      <MessageBox variant="success">
                        Delivered at {order.deliveredAt}
                      </MessageBox>
                    ) : (
                      <MessageBox variant="danger">Your order will be shipped within next 24 hours.</MessageBox>
                    )}
                  </div>
                </li>
                <li>       
                  <div className="card card-body">
                    <h2>Payment</h2>
                    <p>
                      <strong>Method:</strong> {order.paymentMethod}
                    </p>
                    {order.isPaid ? (
                      <MessageBox variant="success">
                        Paid at {order.paidAt}
                      </MessageBox>
                    ) : (
                      <MessageBox variant="danger">Please make your payment on delivery.</MessageBox>
                    )}
                  </div>
                </li>
                <li>
                  <div className="card card-body">
                  <h2>Order Items</h2>
                  <ul>
                   {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                      </div>
                      <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                      </div>

                      <div>
                          {item.qty} x Rs.{item.price} = Rs.{item.qty * item.price}
                      </div>
                     </div>
                    </li>
                    ))}
                  </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-1"></div>
            <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Discount</div>
                  <div>Rs.{order.discountPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
            </ul>
            </div>
            <div className="card card-body">
             <h3>If you have not received the order within 5 working days,please be kind enough to contact us with 
               your order number. Contact us: +94 (77) 123456</h3>
            </div>
            </div> 
        </div>
    );
   
}
