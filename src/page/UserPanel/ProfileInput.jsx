
const ProfileInput = ({name, type, label, placeholder, data, setData , autocomplete}) => {
  
  return (
      <div>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input type={type} id={name} name={name} onChange={e => setData(e)} value={data}
              className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-stone-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={placeholder}
              autoComplete={autocomplete}/>
      </div>
  );
}

export default ProfileInput;