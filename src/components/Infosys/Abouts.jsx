import React from "react";

const About = () => {
  return (
    <>
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-4">Infosys Company</h1>
        <p class="text-gray-600 mb-4">
          Infosys Limited is an Indian multinational corporation that provides
          IT consulting and services.
        </p>
        <div class="mb-4">
          <h2 class="text-xl font-bold mb-2">About Infosys</h2>
          <p>
            Infosys was founded in 1981 and is headquartered in Bangalore,
            India. It is one of the largest IT services companies in the world,
            offering a range of services including consulting, application
            development, and business process outsourcing.
          </p>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-2">Contact Information</h2>
          <p>Email: info@infosys.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Address: 123 Tech Street, Bangalore, India</p>
        </div>
      </div>
    </>
  );
};

export default About;
