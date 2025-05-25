import Link from "next/link";
import React from "react";

type Props = {};

const CtaButtonMobile = (props: Props) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="relative">
        {/* Season tag above button */}
        {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/90 to-black/90 backdrop-blur-sm text-center text-white text-xs font-bold py-1.5 px-4 rounded-t-xl border-t border-x border-orange-500/40 transition-all duration-300">
          <span className="text-orange-400">Register for Trials</span>
        </div> */}

        {/* CTA Button */}
        <Link
          href="/register"
          className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-center rounded-lg transition-colors duration-300 uppercase relative overflow-hidden group"
        >
          <span className="flex items-center justify-center">
            Register for Trials
            <svg
              className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          {/* Animated underline effect */}
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600/80 via-orange-500 to-orange-600/80 transition-all duration-500 ease-out group-hover:w-full"
            aria-hidden="true"
          ></span>

          {/* Subtle pulsing effect to draw attention */}
          <span
            className="absolute inset-0 bg-orange-500/10 animate-pulse rounded-lg"
            aria-hidden="true"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default CtaButtonMobile;
