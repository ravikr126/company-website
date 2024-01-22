import React from "react";

const DropdownList = ({ items }) => {
  return (
    <div className="flex ">
      <ul className="flex gap-10">
        {items.map((item, index) => (
          <li key={index}>
            <h3 className="text-base">{item.title}</h3>
            <select className="rounded-lg border-black border p-2">
              {item.dropdownOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option.value} >
                  {option.label}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button className="px-8 bg-orange-400 ml-6">Next</button>
    </div>
  );
};

const Phoneprice = () => {
  const data = [
    {
      title: "Brands",
      dropdownOptions: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
      ],
    },
    {
      title: "Models",
      dropdownOptions: [
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
        { value: "option6", label: "Option 6" },
      ],
    },
    {
      title: "Years",
      dropdownOptions: [
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
        { value: "option6", label: "Option 6" },
      ],
    },
    {
      title: "Pincode",
      dropdownOptions: [
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
        { value: "option6", label: "Option 6" },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <>
      <div className="mb-5 rounded-xl mx-5 h-96 p-5 bg-[#E26EE5]">
        <p className="text-white text-4xl font-bold">Phone Prices</p>

        <div className="drop-shadow-xl p-5 mt-8 border rounded-xl h-[250px] w-1/2 bg-[#00B7C2]">
          <p className="text-3xl font-bold text-white mb-2">
            Search for a Phone
          </p>
          <p className="text-base font-bold text-white">
            Select a year , Brands and models to see what you cann expect to pay
            for it this week.
          </p>
          <div className="mt-10">
            <DropdownList items={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Phoneprice;
