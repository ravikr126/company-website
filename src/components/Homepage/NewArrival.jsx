import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NewArrival = () => {
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
    axios
      .get("YOUR_API_ENDPOINT")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between font-bold">
          <h1 className="text-2xl">New Arrivals</h1>
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
            <div
              key={item.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <StarRating rating={item.rating} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="py-5 px-10 rounded-xl bg-[url('https://images.unsplash.com/photo-1580521923679-6d275830d039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25lcGx1c3xlbnwwfHwwfHx8MA%3D%3D')]">
            <p className="text-3xl py-5 text-white">
              Get the best deal for Mobile{" "}
            </p>
            <button className="font-bold py-3 px-5 rounded-xl text-white bg-[#FFA732]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
