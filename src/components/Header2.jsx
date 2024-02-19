import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Header2 = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Buy", href: "/buy" },
    { id: 3, label: "Sell", href: "/sell" },
    { id: 4, label: "Exchange", href: "/exchange" },
    { id: 4, label: "Track Order", href: "/trackorder" },
  ];

  const rightOptions = [
    {
      id: 5,
      icon: <FaRegUser />,
      label: "Sign In",
      href: "/signin",
    },
    { id: 6, icon: <FiShoppingBag />, label: "Cart", href: "/cart" },
  ];

  return (
    <header className="py-4 text-black bg-gradient-to-r from-cyan-200 to-pink-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mx-4 md:mx-0 md:mr-5 text-center">
          <img src="./logo1.jpg" alt="" className="w-20 h-auto" />
        </div>
        {/* Centered Links */}
        <nav className="ml-4 md:ml-0 mt-2 md:mt-0 flex items-center justify-center md:justify-end gap-3 md:gap-24">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-lg mx-2 my-2 md:my-0 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side Options */}
        <div className="flex mt-2 md:mt-0 md:ml-auto mr-4">
          {rightOptions.map((option) => (
            <a
              key={option.id}
              href={option.href}
              className="text-lg mx-2 md:mx-4 hover:underline flex items-center"
            >
              {option.icon} {/* Render the icon directly */}
              <span className="ml-2 hidden md:inline">{option.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header2;
