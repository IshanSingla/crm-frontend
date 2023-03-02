import React, { useState } from "react";

export default function AdminTemp({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="md:w-3/12 min-h-screen hidden md:flex flex-col items-center bg-black px-2 py-3 text-white">
        Sidebar
      </div>

      {/* Hamburger */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute top-2 right-2 bg-black p-2 text-white"
      >
        open
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden z-10 absolute h-screen w-1/3 bg-black bg- px-2 py-3 text-white"
        >
          <div className="flex flex-col items-center">Sidebar</div>
        </div>
      )}

      {/* Main */}
      <div className="w-full px-6 py-10 flex flex-col items-center">
        <h1 className="text-center font-semibold capitalize"> Admin Portal </h1>

        {/* Input fields */}
        {children}
      </div>
    </div>
  );
}
