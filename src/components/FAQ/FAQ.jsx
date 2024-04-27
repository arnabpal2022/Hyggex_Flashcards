import { useState } from "react";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-[12px] border-blue-800 md:w-3/4 w-full">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-6 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
export default Item;