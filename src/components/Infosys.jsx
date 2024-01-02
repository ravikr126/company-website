import React, { useState } from "react";
import "../App.css";
import "../index.css";
import Homes from "./Infosys/Homes";
import Contacts from "./Infosys/Contacts";
import Abouts from "./Infosys/Abouts";

const Tabs = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="tab">
        <div className="tab-headers">
          {config.map((entry, index) => (
            <div
              className={`tab-header ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))}
        </div>
        <div className="tab-body">{config[activeTab].component}</div>
      </div>
    </>
  );
};

const Infosys = () => {
  return (
    <div className="h-screen flex flex-col mt-9">
      <div className="bg-blue-200 h-96 relative">
        {/* Image Box for 1st Box */}

        <div
          className="h-full bg-cover bg-center mt-8"
          style={{ backgroundImage: "url(your_image_url)" }}
        >
          {/* original one start here  */}
          <div className="flex items-end justify-center top-5">
            <h1 className="text-white text-4xl font-bold">Company Name</h1>
          </div>
        </div>

        <div class="box-content h-32 w-32 p-4 border-4 absolute top-[40%] flex flex-col left-1/4 transform -translate-x-1/2 -translate-y-1/3 ">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="">
          <Tabs
            config={[
              { header: "Home", component: <Homes /> },
              { header: "About us", component: <Abouts /> },
              { header: "contact", component: <Contacts /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Infosys;
