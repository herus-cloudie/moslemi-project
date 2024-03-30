import classNames from 'classnames';

const InteractiveButton2 = ({ item , activePermissions , setPermission}) => {

  return (
    <div className='flex items-center gap-1'>
         <div onClick={()=>{
          setPermission(item.id)
          }} className='relative transition-all duration-300 p-[0.2rem] w-8 h-5 flex rounded-sm items-center justify-end' style={{border: activePermissions.includes(item.id) ?'solid 1px #0e8964':'solid 1px #587ae2',backgroundColor: activePermissions.includes(item.id) ?'#14C38E':'#ADBDF3'}}>
          <span className={classNames('w-[50%] h-full bg-white rounded-sm transition-all duration-300',{
            'ml-[0.7rem]':activePermissions.includes(item.id),
          })}></span>
        </div>
        <span className='text-sm font-[shabnambold] text-stone-800 '>{item.path}</span>
    </div>
  );
}

export default InteractiveButton2;
