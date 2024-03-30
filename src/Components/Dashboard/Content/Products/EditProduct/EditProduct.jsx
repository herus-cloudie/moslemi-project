import Cookies from 'js-cookie';
import { React, useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { editProduct } from '../../../../../features/dashboard/action';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';
import moment from 'moment-jalaali';

function EditProduct({ isEdit , setIsEdit }) {
    const categories = useSelector(state => state.dashboard.categories);
    const [imageName,setImageName] = useState('');
    const [desc,setDesc] = useState(isEdit.value.description);
    const [dropCate,setDropCate] = useState({status:false,value:categories?.find(cate => cate.id === isEdit.value.category_id ).title,id:isEdit.value.category_id})
    const [priceValue,setPriceValue] = useState(`${isEdit.value.price}`);
    const loading = useSelector(state => state.dashboard.productsLoading);
    const titleRef = useRef();
    const imageRef = useRef();
    const dispatch = useDispatch();
    
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmitter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            image:imageName,
            category_id:dropCate.id,
            price:priceValue.replaceAll(',',''),
            description:desc,
            userId : JSON.parse(Cookies.get("user")).id
        }
        switch(true)
        {
            case formData.title.length === 0 : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.description.length === 0 : toast.warn("توضیح را وارد کنید");
            break;
            case formData.category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            break;
            default : EditProduct(formData)
        }
    }

    const EditProduct = (form) => {
        let formdata = new FormData();
        formdata.append("title", form.title);
        formdata.append("description", form.description);
        formdata.append("category_id", form.category_id);
        formdata.append("seller_id", form.userId );
        formdata.append("price", form.price);
        if(form.image !== "") {
            formdata.append("image", form.image , `${imageRef.current.value}`);
        }
        dispatch(editProduct({id:isEdit.value.id,formdata}))
    }

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
        
        setPriceValue(separatedNumber)
      }

  return (
    <div className='flex w-full sm:w-[90%] md:w-full 2xl:w-[70%] flex-col opacity-motion'>
        <div className='bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>ویرایش محصول</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setIsEdit({status:false,value:""})}/>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)} onSubmit={(e)=>formSubmitter(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" defaultValue={isEdit.value.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
            {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>setImageName(e.target.files[0])} ref={imageRef} type="file" className='p-1 outline-[#0ab694] w-full text-left' name='image'/>
            </div>
            {/* describe */}
               <Editor setDesc={setDesc} desc={desc}/>
            {/* categories */}
             <CategoriesBox dropCate={dropCate} setDropCate={setDropCate}/>
            {/* price */}
           <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="price" className='font-semibold text-[#2e424a]'>قیمت محصول</label>
            <input type="text" name="price" id="" onChange={(e)=>{
                !(e.target.value.length < 1) ? separateByCommas(parseInt(e.target.value.replaceAll(',',''))) : separateByCommas(0)
            }} value={priceValue}  placeholder='به تومان...' className='p-1 outline-[#0ab694] w-[20%] text-left font-[shabnambold]' style={{direction:'ltr'}}/>
            </div>
            <div className='flex items-start gap-3 w-full flex-col'>
                <div>
                    <span className='font-[shabnamBold] text-[#2e424a]'>تاریخ ایجاد:</span>
                    <span className='font-[shabnamBold] mr-1'>{moment(isEdit.created_at).format('jYYYY/jMM/jDD')}</span>
                </div>
                <div>
                    <span className='font-[shabnamBold] text-[#2e424a]'>آخرین ویرایش:</span>
                    <span className='font-[shabnamBold] mr-1'>{moment(isEdit.updated_at).format('jYYYY/jMM/jDD')}</span>
                </div>
            </div>
            <button type='submit' className='w-[50%] min-h-[35px] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl rounded-sm'>
                {
                    loading
                    ? <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem] mx-auto'/>
                    :<span>ثبت محصول</span>
                }
            </button>
        </form>
    </div>
  )
}

export default EditProduct;