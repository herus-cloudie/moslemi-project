import React from 'react';
import CurrentOrders from './CurrentOrders';
import CompletedOrders from './CompletedOrders';
import CanceledOrders from './CanceledOrders';

function BodyOrders(props) {
    const { completedOrders,
            canceledOrders,
            currentOrders,
            Switch,
            discounts,
            discountIds,
            separateByCommas,
            showDetails, 
            setShowDetails } = props;
  return (
    <div className='flex flex-col mt-5  md:p-10' style={{border:'solid 1px #cacaca'}}>
        {
            Switch === "current"
            ?
            <CurrentOrders currentOrders={currentOrders} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas} showDetails={showDetails} setShowDetails={setShowDetails}/>
            :
            Switch === "completed"
            ?
            <CompletedOrders completedOrders={completedOrders} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas} showDetails={showDetails} setShowDetails={setShowDetails}/>
            :
            <CanceledOrders canceledOrders={canceledOrders} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas} showDetails={showDetails} setShowDetails={setShowDetails}/>
        }
    </div>
  )
}

export default BodyOrders;