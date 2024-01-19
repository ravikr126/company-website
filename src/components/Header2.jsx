// Header.js
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Header2 = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Contact", href: "/contact" },
  ];

  const rightOptions = [
    {
      id: 5,
      icon: <FaRegUser />,
      label: "Sign In",
      href: "/signin",
    },
    { id: 6, icon: <FiShoppingBag /> , label: "Cart", href: "/cart" },
  ];

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="ml-20">logo</div>
        {/* Centered Links */}
        <nav className="ml-50 flex items-center justify-center gap-20 md:justify-start">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-lg mx-4 my-2 md:my-0 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side Options */}
        <div className="flex mt-2 md:mt-0 mr-5">
          {rightOptions.map((option) => (
            <a
              key={option.id}
              href={option.href}
              className="text-lg mx-4 hover:underline flex items-center"
            >
              {option.icon} {/* Render the icon directly */}
              <span className="ml-2">{option.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header2;
