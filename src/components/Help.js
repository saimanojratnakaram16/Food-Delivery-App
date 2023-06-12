import { useEffect, useState } from "react";
import { ISSUES_URL } from "../utils/constants";
import AccordionList from "./AccordionList";

const tabsData = {
  "partner-onboarding": "PartnerOnboarding",
  legal: "Legal",
  faq: "FAQs",
};

const Help = () => {
  const [openTab, setOpenTab] = useState("partner-onboarding");
  const [tabData, setTabData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTabData();
  }, [openTab]);

  async function getTabData() {
    setLoading(true);
    const data = await fetch(
      ISSUES_URL + openTab
    );
    const jsonData = await data.json();
    setTabData(jsonData?.data?.issues?.data);
    setLoading(false);
  }
  const tabs = Object.keys(tabsData).map((tab, index) => {
    return (
      <div
        className={`h-12 cursor-pointer py-3 px-5 ${
          openTab === tab ? "bg-red-400" : ""
        }`}
        key={index}
        onClick={() => setOpenTab(tab)}
      >
        {tabsData[tab]}
      </div>
    );
  });
  return (
    <div className="m-2 p-2">
    <div className="mx-5 px-5 my-2 py-2 text-3xl"> Help and Support </div>
    <div className="m-5 p-5 flex border-2 border-slate-100 rounded-md">
      <div className=" h-fit  bg-slate-100">{tabs}</div>
      <div className="mx-4 w-4/5">
      {loading ? <div className="text-center"> Loading ....</div> : 
        <AccordionList dataList={tabData} />
      }
      </div>
    </div>
    </div>
  );
};
export default Help;
