import classNames from 'classnames';
import { useState } from 'react';

const InteractiveButton = ({ item , setPermission}) => {
  const [focus, setFocus] = useState(false);
  
  return (
    <div className='flex items-center gap-1'>
         <div onClick={()=>{
          setFocus(!focus)
          setPermission(item.id)
          }} className='relative transition-all duration-300 p-[0.2rem] w-8 h-5 flex rounded-sm items-center justify-end' style={{border:focus ?'solid 1px #0e8964':'solid 1px #587ae2',backgroundColor:focus ?'#14C38E':'#ADBDF3'}}>
          <span className={classNames('w-[50%] h-full bg-white rounded-sm transition-all duration-300',{
            'ml-[0.7rem]':focus,
          })}></span>
        </div>
        <span className='text-sm font-[shabnambold] text-stone-800 '>{item.path}</span>
    </div>
  );
}

export default InteractiveButton;
