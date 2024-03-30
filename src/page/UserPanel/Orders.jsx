import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailOrders, getOrders } from '../../features/dashboard/action';
import { getProducts } from '../../features/products/action';
import BodyOrders from './BodyOrders';
import SwitchOrders from './SwitchOrders';

function Orders() {
    const [Switch,setSwitch] = useState("current");
    const [showDetails,setShowDetails] = useState({type:null,id:""});
    const orders = useSelector(state => state.dashboard.orders);
    const detailOrders = useSelector(state => state.dashboard.detailOrders);
    const products = useSelector(state => state.products.products);
    const discounts = useSelector(state => state.products.discounts);
    const discountIds = discounts?.map(dis => dis.product_id);
    const userId = JSON.parse(Cookies.get("user"))?.id;
    const myOrders = orders.filter(order => order.user_id === userId);
    const currentOrders = myOrders.filter(order => order.status === null); 
    const completedOrders = myOrders.filter(order => order.status === "1"); 
    const canceledOrders = myOrders.filter(order => order.status === "0"); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders())
        dispatch(getProducts())
        dispatch(getDetailOrders())
    },[])

    function separateByCommas(number) {
        let numberString = String(number);
        
        let separatedNumber = '';
        let counter = 0;
        
        for (let i = numberString.length - 1; i >= 0; i--) {
          if (counter === 3) {
            separatedNumber = ',' + separatedNumber;
            counter = 0;
          }
          separatedNumber = numberString.charAt(i) + separatedNumber;
          counter++;
        }
        
        return separatedNumber
    }
  return (
    <div className='container mx-auto'>
        <h1 className='font-[shabnamBold] text-[1.1rem] text-stone-700'>تاریخچه سفارشات</h1>
        <SwitchOrders Switch={Switch} setSwitch={setSwitch} setShowDetails={setShowDetails}/>
        <BodyOrders currentOrders={currentOrders} completedOrders={completedOrders} canceledOrders={canceledOrders} Switch={Switch} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas} showDetails={showDetails} setShowDetails={setShowDetails}/>
    </div>
  )
}

export default Orders;


