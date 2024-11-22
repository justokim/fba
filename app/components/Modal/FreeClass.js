import React, { useState } from "react";

const FreeModal = () => {
  // FreeModal visibility state
  const [isOpen, setIsOpen] = useState(true);

  // Close modal if clicked outside the modal content
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-40 w-full flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <div className="bg-white opacity-80 max-4-xl p-6 rounded-lg  text-center">
          <h1 className="text-xl text-[#6D31ED] font-bold">First class is on us!</h1>
        </div>
      </div>
    )
  );
};

export default FreeModal;
