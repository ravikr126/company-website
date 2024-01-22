import React, { useState, useEffect } from "react";
import axios from "axios";

const DropdownList = ({ items }) => {
  return (
    <div className="flex ">
      <ul className="flex gap-10">
        {items.map((item, index) => (
          <li key={index}>
            <h3 className="text-base">{item.title}</h3>
            <select className="rounded-lg border-black border p-2">
              {item.dropdownOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option.value}>
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

const ShopbyCategory = () => {
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
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint
    axios.get('your-api-endpoint')
      .then((response) => setCardData(response.data))
      .catch((error) => console.error('Error fetching card data:', error));
  }, []);

  return (
    <>
      <div className="bg-gray-300 flex flex-row p-5 h-[450px] gap-10">
        <p className="font-bold text-2xl">Shop By Category</p>

        <div className="w-2/3">
        <div className="card-container">
      {Array.isArray(cardData) && cardData.length > 0 ? (
        cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${index + 1}`} />
            <h2>{card.title}</h2>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
        </div>

        <div className="text-right mb-5 rounded-xl mx-5 h-96 p-5 bg-blue-700">
          <p className="text-white text-4xl font-bold">Phone Prices</p>

          <div className="drop-shadow-xl p-5 mt-8 border rounded-xl h-[250px] w-1/2 bg-[#00B7C2]">
            <p className="text-3xl font-bold text-white mb-2">
              Search for a Phone
            </p>
            <p className="text-base font-bold text-white">
              Select a year , Brands and models to see what you cann expect to
              pay for it this week.
            </p>
            <div className="mt-10">
              <DropdownList items={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopbyCategory;
