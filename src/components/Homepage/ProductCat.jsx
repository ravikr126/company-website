import React from "react";

const ProductCat = () => {
  const data = [
    {
      title: "Start your current phones",
      imageUrl: "../assets/HomeImages/404.png",
      contains:
        "Welcome to Mobile Genie. Buckle up for Savings Galore. The mobile ride is about to start, and your mobile wishes may really come true",
    },
    {
      title: "Recommendation for You",
      imageUrl: "../assets/HomeImages/compaing.png",
      contains: "Recommended for family and friends",
      specialcontains: "Buy More Save More",
    },
    {
      title: "Get an instant offer",
      imageUrl: "../assets/HomeImages/Buy.png",
      contains: "Unlock the hidden value for your mobile. Trade More Earn More",
    },
    {
      title: "Compare Phones",
      imageUrl: "../assets/HomeImages/Jiggling.png",
      contains:
        "Compare mobile phones instantly view side-by-side comparisons, market reviews",
    },
    // Add more data items as needed
  ];
  return (
    <div className="mt-5 bg-slate-500">
      <div>Popular Category</div>
       {/* Responsive grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mx-4 sm:mx-8 lg:mx-10 my-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 sm:p-8 rounded-md text-center"
          >
            <img src={item.imageUrl} alt={item.title} className="w-full mb-2" />
            <p className="font-bold text-lg sm:text-xl">{item.title}</p>
            <p className="text-sm sm:text-base">{item.contains}</p>
            <p className="font-bold text-sm sm:text-base">
              {item.specialcontains}
            </p>
          </div>
        ))}
      </div>

      {/* grid complete */}
    </div>
  );
};

export default ProductCat;
