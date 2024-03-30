import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clearIcon from '../../assets/img/clear.png';

function MobileMenu({ dropMenu , setDropMenu }) {

  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const itemsMenu = [
    {id:0,title:'صفحه اصلی',cateId:null,beList:false,link:'/'},
    {id:1,title:"محصولات",cateId:null,beList:false,link:'/shop'},
    {id:49,title:"اخبار",cateId:null,beList:false,link:'/news'},
    {id:2,title:"ثبت سفارش",cateId:null,beList:false,link:"/order"},
    {id:3,title:"بلاگ",cateId:null,beList:false,link:'/articles'},
    {id:4,title:"نمونه کارها",cateId:null,beList:true},
    {id:5,title:"آموزش ورود",cateId:null,beList:false,link:"/LoginLearn"},
    {id:6,title:"استخدام",cateId:null,beList:false,link:"/recruitment"},
    {id:7,title:"خدمات ما",cateId:null,beList:true},
    {id:8,title:"سایت های آماده",cateId:1,beList:true},
    {id:9,title:"پلاگین ورد پرس",cateId:1,beList:true},
    {id:10,title:"قالب html",cateId:1,beList:true},
    {id:11,title:"اپلیکیشن موبایل",cateId:1,beList:true},
    {id:12,title:"اسکریپت ها",cateId:1,beList:true},
    {id:13,title:"نمونه کار گرافیک",cateId:4,beList:false,link:"/workSamples/6/نمونه%20کار%20گرافیک"},//testtttt
    {id:14,title:"نمونه کار پریمیر",cateId:4,beList:false,link:"/workSamples/10/نمونه%20کار%20پریمیر"},//test
    // {id:15,title:"نمونه کار طراحی سایت",cateId:4,beList:true,},
    {id:16,title:"نمونه کار اپلیکیشن موبایل",cateId:4,beList:false,link:"/workSamples/9/نمونه%20کار%20اپلیکیشن%20موبایل"}, //test
    {id:17,title:"نمونه کار سئو",cateId:4,beList:false,link:"/workSamples/4/نمونه%20کار%20سئو"},//test
    // {id:18,title:"نمونه کار تدوین و صدا گذاری",cateId:4,beList:false,link:"/workSamples/Voicing"},
    {id:19,title:"فروش سایت اختصاصی و اقتصادی",cateId:7,beList:false,link:"/services/فروش-سایت-اختصاصی-و-اقتصادی"},
    {id:20,title:"فروش قالب سایت",cateId:7,beList:false,link:"/services/فروش-قالب-سایت"},
    {id:21,title:"طراحی سایت اختصاصی",cateId:7,beList:false,link:"/services/طراحی-سایت-اختصاصی"},
    {id:22,title:"خدمات وب سایت و سئو وب سایت",cateId:7,beList:false,link:"/services/خدمات-سئو-وب-سایت"},
    {id:23,title:"خدمات کسب و کار",cateId:7,beList:false,link:"/services/خدمات-کسب-و-کار"},
    {id:24,title:"خدمات شبکه های اجتماعی",cateId:7,beList:false,link:"/services/خدمات-شبکه-های-اجتماعی"},
    {id:25,title:"موشن گرافیک",cateId:7,beList:false,link:"/services/موشن-گرافیک"},
    {id:26,title:"تدوین پروپوزال",cateId:7,beList:false,link:"/services/تدوین-پروپوزال"},
    {id:27,title:"اپلیکیشن موبایل",cateId:7,beList:false,link:'/services/اپلیکیشن-موبایل'},
    {id:28,title:"خدمات پریمیر, تدوین فیلم",cateId:7,beList:false,link:"/services/خدمات-پریمیر-و-تدوین-فیلم"},
    {id:29,title:"خدمات تدوین صدا و صداگذاری",cateId:7,beList:false,link:"/services/خدمات-تدوین-صدا-و-صدا-گذاری"},
    {id:40,title:"موشن گرافیک",cateId:4,beList:false,link:"/workSamples/7/موشن%20گرافیک"},
    {id:41,title:"نمونه کار قالب آماده",cateId:4,beList:false,link:"/workSamples/8/نمونه%20کار%20قالب%20آماده%20گرافیک"},
    // {id:41,title:"نمونه کار UI/UX",cateId:13,beList:false,link:"/workSamples/graphic/UI_UX"},
    // {id:42,title:"نمونه کار بروشور",cateId:13,beList:false,link:"/workSamples/graphic/Brochure"},
    // {id:43,title:"نمونه کار پوستر",cateId:13,beList:false,link:"/workSamples/graphic/Poster"},
    // {id:44,title:"نمونه کار کاتالوگ",cateId:13,beList:false,link:"/workSamples/graphic/Catalog"},
    // {id:45,title:"نمونه کار کارت ویزیت",cateId:13,beList:false,link:"/workSamples/graphic/BusinessCard"},
    // {id:46,title:"نمونه کار لوگو",cateId:13,beList:false,link:"/workSamples/graphic/Logo"},
    // {id:47,title:"PHP(Laravel)",cateId:15,beList:false,link:"/workSamples/web/WebsiteDesignPortfolio"},
    {id:48,title:"خدمات گرافیک",cateId:7,beList:false,link:'/services/خدمات-گرافیک'},
  ]
  const [keyList,setKeyList] = useState({key:'',cateId:''});
  const [stepList,setStepList] = useState(1);

  useEffect(() => {
    if(stepList === 1)
    {
      setKeyList({key:'',cateId:''})
    }
  },[stepList])
  return (

    <div className={!dropMenu ? "w-[100vw] z-[101] h-[100dvh] bg-[#59ce90f8] fixed top-0 right-[-40rem] sm:right-[-50rem] md:right-[-70rem] transition-all duration-700" : "w-[100vw] md:w-[50vw] z-[101] h-screen bg-[#59ce90f8] fixed top-0 right-0 transition-all duration-700"}>
    <div className="flex items-center w-full justify-between px-4 flex-row-reverse py-3 h-fit" style={{borderBottom:'1px solid #fff'}}>
      <img src={clearIcon} alt="close" className="w-[20px] h-[20px]" onClick={()=>{
        setKeyList({key:'',cateId:''})
        setStepList(1)
        setDropMenu(false)
      }}/>
      {
        stepList > 1
        ? <MdKeyboardDoubleArrowRight className="w-[32px] h-[32px] text-white" onClick={()=>{
          setStepList(stepList-1)
            setKeyList({key:itemsMenu.find(item => item.id === itemsMenu.find(item => item.id === keyList.cateId)?.cateId)?.title,cateId:itemsMenu.find(item => item.id === keyList.cateId)?.cateId})
        }}/>
        : <div className="w-[30px] h-[30px]"></div>
      }
    </div>
    <menu className='w-full relative h-[90%] p-5 flex overflow-x-hidden overflow-y-scroll items-center scroll_zero'>   
        <ul className={ stepList === 1 ? 'flex flex-col transition-all duration-300 absolute justify-start right-0 top-0 py-3 items-center w-full h-full overflow-y-scroll scroll_zero gap-y-10' : 'flex flex-col transition-all duration-300 items-center w-full h-full overflow-y-scroll scroll_zero gap-5 absolute right-[-30rem]'}>
            {loginStatus ? <li className='text-[1.1rem] text-white hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center sm:hidden'><Link to={'/userPage/userProfile'} className='font-[shabnamBold]'>پنل کاربری</Link></li> : <></>}
            {
              itemsMenu.filter(item => item.cateId === null).map(item => (
                item.beList === true
                ? <li key={item.id} className='flex items-center justify-center gap-1 text-[1.1rem] text-white hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center' onClick={() => {
                  setKeyList({key:item.title,cateId:item.id})
                  setStepList(2)
                }}><span className='font-[shabnamBold]'>{item.title}</span><RiArrowLeftSLine className='font-[shabnamBold]'/></li>
                : <li key={item.id} className='text-[1.1rem] text-white hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center'><Link to={item.link} className='font-[shabnamBold]'>{item.title}</Link></li>
              ))
            }
        </ul>
        <ul className={ stepList === 2 ? 'flex text-white opacity-100 flex-col transition-all duration-300 absolute right-0 top-0 py-3 items-center w-full h-full overflow-y-scroll scroll_zero gap-5' : stepList === 3 ?  'flex flex-col opacity-0 text-[#5ECF93] transition-all duration-300 items-center w-full h-full overflow-y-scroll scroll_zero gap-5 absolute right-[-30rem]' :  'flex opacity-0 flex-col transition-all text-[#5ECF93] duration-300 items-center w-full h-full overflow-y-scroll scroll_zero gap-5 absolute right-[30rem]'}>
          {
          itemsMenu.filter(item => item.cateId === keyList.cateId).map(item => (
                  item.beList === true
                  ? <li key={item.id} className='flex items-center text-inherit justify-center gap-1 text-[1rem] hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center' onClick={() => {
                    setKeyList({key:item.title,cateId:item.id})
                    setStepList(3)
                   }}><span className='font-[shabnamBold]'>{item.title}</span><RiArrowLeftSLine className='font-[shabnamBold]'/></li>
                  : <li key={item.id} className='text-[1rem] text-white hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center'><Link to={item.link} className='font-[shabnamBold]'>{item.title}</Link></li>
          ))
         }
        </ul>
        <ul className={ stepList !== 3 ?  'flex flex-col text-[#5ECF93] opacity-0 transition-all duration-300 items-center w-full h-full overflow-y-scroll scroll_zero gap-5 absolute right-[30rem]' : 'flex text-white flex-col transition-all duration-300 absolute py-3 opacity-100 right-0 top-2 items-center w-full h-full overflow-y-scroll scroll_zero gap-5'}>
        {
           itemsMenu.filter(item => item.cateId === keyList.cateId).map(item => (
            <li key={item.id} className='text-[1rem]  text-inherit hover:bg-[#ffffffce] rounded-sm hover:text-[#5ECF93] w-[80%] text-center'><Link className='font-[shabnamBold]' to={item.link}>{item.title}</Link></li>
           ))
        }
        </ul>
    </menu>
    </div>

  )
}

export default MobileMenu;









