"use client"
import { useState } from 'react';

const FAQSection = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);

  return (
    <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
            Have any questions?
          </p>
          <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {[{
              title: "Do you provide any free plan?",
              content: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.",
              state: accordion1,
              setState: setAccordion1
            }, {
              title: "How to claim your 25% discount offer?",
              content: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.",
              state: accordion2,
              setState: setAccordion2
            }, {
              title: "What’s your refund policy?",
              content: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.",
              state: accordion3,
              setState: setAccordion3
            }, {
              title: "How to get support for the product?",
              content: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.",
              state: accordion4,
              setState: setAccordion4
            }].map((item, index) => (
              <div key={index} className="w-full p-1">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    item.setState(!item.state);
                  }}
                >
                  <div
                    className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${
                      item.state ? "border-indigo-600" : "border-gray-200"
                    } rounded-2xl shadow-10xl`}
                  >
                    <div className="flex flex-wrap justify-between -m-2">
                      <div className="flex-1 p-2">
                        <h3 className="text-lg font-semibold leading-normal">{item.title}</h3>
                        <div
                          className={`overflow-hidden duration-500 ${
                            item.state ? "h-auto" : "h-0"
                          }`}
                          style={{
                            height: item.state ? "auto" : "0",
                          }}
                        >
                          <p className="mt-4 text-gray-600 font-medium">
                            {item.content}
                          </p>
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <div className={item.state ? "hidden" : ""}>
                          <svg
                            className="relative top-1"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.25 6.75L9 12 3.75 6.75"
                              stroke="#18181B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className={item.state ? "" : "hidden"}>
                          <svg
                            className="relative top-1"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.16732 12.5L10.0007 6.66667 15.834 12.5"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center font-medium">
            <span>Still have any questions?</span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
