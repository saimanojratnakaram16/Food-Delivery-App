import React,{useContext} from "react";
import UserDataContext from "../contexts/UserDataContext";


const formFields = [
    {
        label: "Full Name",
        type: "text",
        fieldName: "name"
    },
    {
        label: "Phone",
        type: "text",
        fieldName: "phone"
    },
    {
        label: "Email",
        type: "email",
        fieldName: "email"
    },
    {
        label: "Address",
        type:"textarea",
        fieldName: "address"
    }

];

export default function Profile() {
    const {userData, setUserData} = useContext(UserDataContext);
    const handleChange =(e, id) =>{
        const cloneData = {...userData};
        cloneData[id] = e.target.value;
        setUserData({...cloneData});
    }
    const fields = formFields?.map(({fieldName, label, type}) => {
        return <BaseInput key={fieldName}  type={type} label={label} id={fieldName} value={userData[fieldName]} handleChange={(e,id)=>handleChange(e,id)}/>;
    });

  return (
    <div className="min-h-[56vh]">
    <div className="m-5 p-5 ">
      <div className=" m-2 p-2 border-2 border-slate-400 rounded-md">
        <div className="text-lg p-2 font-bold border-b-2 border-slate-200"> Profile Data</div>
        <form className="w-full max-w-sm m-2 p-2">
         {fields}
        </form>
      </div>
    </div>
    </div>
  );
}

const BaseInput = ({label, type, id, value, handleChange}) =>{
    return (
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
            id={id}
            type={type}
            onChange={(e)=>handleChange(e,id)}
            value = {value}
          />
        </div>
      </div>
    );
}
