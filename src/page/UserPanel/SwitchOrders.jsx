import React from 'react'

function SwitchOrders({ Switch , setSwitch , setShowDetails }) {
    const changer = value => {
        setSwitch(value);
        setShowDetails({type:null,id:""})
    }
  return (
    <div className='flex mt-10 gap-5 flex-col md:flex-row' style={{borderBottom:"solid 1px #cacaca"}}>
        <div className='flex items-center w-fit gap-1 p-3 border-green-700 cursor-pointer' style={{borderBottom:Switch === "current" ? "solid 5px #aa691e" : ""}} onClick={() => changer("current")}>
            <span className={Switch === "current" ? 'font-[shabnam] text-yellow-700' : 'font-[shabnam] text-stone-600'}>جاری</span>
            <span className={Switch === "current" ? 'font-[shabnam] bg-yellow-700 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm' : 'font-[shabnam] bg-stone-600 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm'}>0</span>
        </div>
        <div className='flex items-center w-fit gap-1 p-3 border-green-700 cursor-pointer' style={{borderBottom:Switch === "completed" ? "solid 5px green" : ""}} onClick={() => changer("completed")}>
            <span className={Switch === "completed" ? 'font-[shabnam] text-green-700' : 'font-[shabnam] text-stone-600'}>تکمیل شده</span>
            <span className={Switch === "completed" ? 'font-[shabnam] bg-green-700 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm' : 'font-[shabnam] bg-stone-600 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm'}>0</span>
        </div>
        <div className='flex items-center w-fit gap-1 p-3 border-green-700 cursor-pointer' style={{borderBottom:Switch === "canceled" ? "solid 5px #b91c1c" : ""}} onClick={() => changer("canceled")}>
            <span className={Switch === "canceled" ? 'font-[shabnam] text-red-700' : 'font-[shabnam] text-stone-600'}>لغو شده</span>
            <span className={Switch === "canceled" ? 'font-[shabnam] bg-red-700 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm' : 'font-[shabnam] bg-stone-600 text-white w-5 h-5 min-w-fit min-h-fit flex justify-center items-center rounded-sm'}>0</span>
        </div>
    </div>
  )
}

export default SwitchOrders