import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../assets/icons/icons";

const Accordion = ({ data, isOpen, ind, setIsOpen }) => {
  return (
    <>
      <div className="p-2 flex justify-between border-b-2 border-slate-400">
        <span className="text-xl cursor-pointer w-full" onClick={()=> isOpen ? setIsOpen(-1): setIsOpen(ind)}> {data.title}</span>
       {isOpen ? <button className="text-xl" onClick={()=>setIsOpen(-1)}>{UP_ARROW}</button>
        : <button className="text-xl" onClick={()=> setIsOpen(ind)}>{DOWN_ARROW}</button>}
      </div>
      {isOpen &&
      <div className="p-2 m-2 text-lg">{data.description}</div>}
      </>
  );
};

const AccordionList = ({ dataList }) => {
  const [openIndex, setOpenIndex] = useState();
  const accList = dataList?.map((data, index) => {
    return (<div className="mb-4 border-2 border-slate-400 rounded-md" key = {index}>
    <Accordion data={data} ind={index} isOpen= {openIndex === index} setIsOpen = {(i)=>setOpenIndex(i)}/>
    </div>
    );
  });
  return <div>{accList}</div>;
};

export default AccordionList;
