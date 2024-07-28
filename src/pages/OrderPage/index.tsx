import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import OrderList from './order-list/OrderList';
import { Navigate } from 'react-router-dom';
const OrderPage = () => {
const  { isAuth }  = useAuth();

if( !isAuth ) return <Navigate to="/" />;

  return (
    <div className = 'page'>
      <div className = 'container'>
        <h1>주문 히스토리</h1>
        <OrderList />
      </div>
    </div>
  )
}

export default OrderPage
