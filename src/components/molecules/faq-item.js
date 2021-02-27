export const FAQItem = ({ children }) => {
  return (
    <div x-data="collapse()" className="px-4 mb-3 bg-gray-100 rounded">
      <button
        x-spread="trigger"
        className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
        role="button"
        aria-controls="faq4"
        aria-expanded="false"
      >
        {children}
        <svg
          className="flex-none w-4 h-4 ml-4 transition transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/*
          <div
            x-spread="collapse"
            x-cloak
            className="pb-5 pr-0 text-gray-700 md:pr-40"
            id="faq4"
          >
            Browsers use the DOCTYPE declaration to choose whether to show the
            document using a mode that is more compatible with Web standards or
            with old browser bugs. Using a correct and modern DOCTYPE
            declaration at the start of your HTML will improve browser standards
            compliance.
          </div>
          */}
    </div>
  )
}
