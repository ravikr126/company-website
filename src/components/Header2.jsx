// Header.js
import React from "react";

const Header2 = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Contact", href: "/contact" },
  ];

  const rightOptions = [
    { id: 5, label: "Sign In", href: "/signin" },
    { id: 6, label: "Sign Out", href: "/signout" },
  ];

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Centered Links */}
        <nav className="ml-96 flex items-center justify-center gap-20 md:justify-start">
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
        <div className="flex mt-2 md:mt-0">
          {rightOptions.map((option) => (
            <a
              key={option.id}
              href={option.href}
              className="text-lg mx-4 hover:underline"
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header2;
