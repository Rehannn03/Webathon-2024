"use client";
import heroImage from "@/../public/heroImage.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/stores/store";

const HeaderNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const pathName = usePathname();
  const { user } = useUserStore(); // Destructure user directly

  useEffect(() => {
    if (["/room", "/sign-up", "/sign-in"].includes(pathName)) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [pathName]);

  if (!showHeader) return null;

  const userExists = !!user;

  return (
    <div className="container mx-auto pt-6 px-4">
      <div className="mb-6">
        <div className="flex items-center justify-between px-6 py-3.5 bg-white rounded-full">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a href="#">
                  <Image src="/logo.png" alt="Logo" width={45} height={45} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center justify-center">
                  <li className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                      href="/features"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                      href="https://docs.ipfs.tech/concepts/privacy-and-encryption/#what-s-public-on-ipfs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Data & Security
                    </a>
                  </li>
                  <li className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                      href="/appointment"
                    >
                      Appointment
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="flex flex-wrap -m-2">
                  {!userExists ? (
                    <>
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 border rounded-full"
                          href="/sign-in"
                        >
                          Log In
                        </a>
                      </div>
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-primary hover:secondary focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="/sign-up"
                        >
                          Get Started
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="w-full md:w-auto p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-primary hover:secondary focus:ring-4 focus:ring-blue-200 rounded-full"
                        href="/profile"
                      >
                        Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <button
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="inline-block"
                >
                  <svg
                    className="text-primary"
                    width="45"
                    height="45"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            mobileNavOpen ? "block" : "hidden"
          } fixed top-0 left-0 bottom-0 w-3/4 z-50`}
        >
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="fixed inset-0 bg-gray-800 opacity-80"
          ></div>
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-16">
              <a className="mr-auto text-2xl font-medium leading-none" href="#">
                <Image src="/logo.png" alt="Logo" width={45} height={45} />
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul className="mb-2">
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="#"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="#"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="#"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="#"
                  >
                    Articles
                  </a>
                </li>
              </ul>
              <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
                <a
                  className="flex items-center text-sm font-semibold text-primary hover:text-accent-foreground"
                  href="#"
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.07674 4.80833L1.37539 5.5C1.2147 5.51374 1.06142 5.57381 0.934198 5.67292C0.807031 5.77202 0.711354 5.9059 0.65874 6.05833C0.606126 6.2108 0.606126 6.37143 0.65874 6.52391C0.711354 6.67637 0.807031 6.81025 0.934198 6.90935C1.06142 7.00845 1.2147 7.06852 1.37539 7.0825L5.4236 7.19999L5.61532 11.4208L5.55859 11.5996C5.52916 11.7206 5.54323 11.8447 5.59986 11.9598C5.65649 12.0749 5.75212 12.1687 5.87539 12.2171C5.99866 12.2656 6.13691 12.2656 6.27538 12.2171L9 11.1428L11.7246 12.2171C11.8631 12.2656 12.0013 12.2656 12.1246 12.2171C12.2479 12.1687 12.3435 12.0749 12.4002 11.9598C12.4569 11.8447 12.4709 11.7206 12.4415 11.5996L12.3848 11.4208L12.5765 7.19999L16.6247 7.0825C16.7854 7.06852 16.9387 7.00845 17.0659 6.90935C17.1931 6.81025 17.2888 6.67637 17.3414 6.52391C17.394 6.37143 17.394 6.2108 17.3337 6.05833Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-3">Contact Us</span>
                </a>
              </div>
              <div>
                {!userExists ? (
                  <>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                      href="/sign-in"
                    >
                      Log In
                    </a>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                      href="/sign-up"
                    >
                      Get Started
                    </a>
                  </>
                ) : (
                  <a
                    className="block py-4 px-5 text-gray-900 hover:bg-primary/50 rounded-lg"
                    href="/profile"
                  >
                    Profile
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
