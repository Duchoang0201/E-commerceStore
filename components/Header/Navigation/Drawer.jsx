import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function Drawer({ children, isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out ${
        isOpen
          ? "opacity-100 duration-500"
          : "opacity-0 translate-x-full duration-500"
      }`}
    >
      <button
        type="submit"
        className="w-screen h-full cursor-pointer"
        onClick={handleOverlayClick}
        onKeyDown={handleKeyDown}
        aria-label="Close Drawer"
        tabIndex={isOpen ? 0 : -1}
      />
      <div
        className={`w-screen max-w-lg right-0 absolute bg-black h-full shadow-xl ease-in-out ${
          isOpen ? "translate-x-0 duration-500" : "translate-x-full"
        }`}
      >
        <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Header</header>
          {children}
          <div className="text-red">asdasds</div>
        </div>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
  children: null,
};
