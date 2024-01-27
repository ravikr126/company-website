import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BestPoduct = () => {

  const StarRating = ({ rating }) => {
    const starPercentage = (rating / 5) * 100;
    const starStyle = {
      width: `${starPercentage}%`,
    };
  
    return (
      <div className="star-rating">
        <div className="stars-container">
          <div className="stars" style={starStyle}></div>
        </div>
      </div>
    );
  };
  

    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      axios.get("YOUR_API_ENDPOINT")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <>
      <div className="flex justify-between px-10 py-10 font-bold bg-[#DCF2F1]">
        <h1 className="text-2xl">Best Products</h1>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
          className="space-between"
        >
          View More <FaArrowRight className="ml-2" />
        </a>
      </div>

      {/* grid */}

      <div className="grid grid-cols-5 gap-4">
      {data.map((item) => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <StarRating rating={item.rating} />
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default BestPoduct;
