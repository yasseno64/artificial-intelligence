import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  window.onscroll = () => {
    setShow(window.scrollY > 744);
  };
  return (
    <>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-primary btn-outline fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
