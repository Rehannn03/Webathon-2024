"use client";
import heroImage from "@/../public/heroImage.png";
import Logo from "@/../public/logo.png";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <section
        data-section-id="2"
        data-share="custom-155380"
        data-category="headers-dark-mix"
        data-component-id="3bde255e_03_awz"
        data-custom-component-id="155380"
        className="relative bg-white overflow-hidden"
      >
        <div className="bg-gray-900">
          <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50">
            <div className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-gray-900">
              <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="svg-inline7"
                >
                  <path
                    d="M6.94004 5.99988L11.14 1.80655C11.2656 1.68101 11.3361 1.51075 11.3361 1.33321C11.3361 1.15568 11.2656 0.985415 11.14 0.859879C11.0145 0.734344 10.8442 0.663818 10.6667 0.663818C10.4892 0.663818 10.3189 0.734344 10.1934 0.859879L6.00004 5.05988L1.80671 0.859879C1.68117 0.734344 1.51091 0.663819 1.33337 0.663819C1.15584 0.663819 0.985576 0.734344 0.860041 0.859879C0.734505 0.985415 0.66398 1.15568 0.66398 1.33321C0.66398 1.51075 0.734505 1.68101 0.860041 1.80655L5.06004 5.99988L0.860041 10.1932C0.797555 10.2552 0.747959 10.3289 0.714113 10.4102C0.680267 10.4914 0.662842 10.5785 0.662842 10.6665C0.662842 10.7546 0.680267 10.8417 0.714113 10.9229C0.747959 11.0042 0.797555 11.0779 0.860041 11.1399C0.922016 11.2024 0.99575 11.252 1.07699 11.2858C1.15823 11.3197 1.24537 11.3371 1.33337 11.3371C1.42138 11.3371 1.50852 11.3197 1.58976 11.2858C1.671 11.252 1.74473 11.2024 1.80671 11.1399L6.00004 6.93988L10.1934 11.1399C10.2554 11.2024 10.3291 11.252 10.4103 11.2858C10.4916 11.3197 10.5787 11.3371 10.6667 11.3371C10.7547 11.3371 10.8419 11.3197 10.9231 11.2858C11.0043 11.252 11.0781 11.2024 11.14 11.1399C11.2025 11.0779 11.2521 11.0042 11.286 10.9229C11.3198 10.8417 11.3372 10.7546 11.3372 10.6665C11.3372 10.5785 11.3198 10.4914 11.286 10.4102C11.2521 10.3289 11.2025 10.2552 11.14 10.1932L6.94004 5.99988Z"
                    fill="#8896AB"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="py-20 md:py-28 bg-slate-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <h1
                  className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight"
                  data-config-id="text9"
                >
                  Your Health and Wellbeing, our Priority
                </h1>
                <p
                  className="mb-8 text-lg md:text-xl text-gray-400 font-medium"
                  data-config-id="text10"
                >
                  Our goal is to make sure our customers receive the best
                  treatment they need in a pleasant environment.
                </p>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                    <a
                      className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="/pricing"
                      data-config-id="text24"
                    >
                      View Pricing
                    </a>
                  </div>
                  <div className="w-full md:w-auto py-1 md:py-0">
                    <a
                      className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-gray-100 font-medium text-center bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="/appointment"
                      data-config-id="text25"
                    >
                      Book an appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative flex mx-auto md:mr-0 max-w-max">
                  <Image
                    width={450}
                    height={450}
                    // fill="cover"
                    className="relative rounded-7xl"
                    src="https://static.shuffle.dev/uploads/files/d8/d8ed2c049579f9e8c93c7a7d085009aaa5d5b3b2/pexels-evg-kowalievska-1170979.jpg"
                    alt=""
                    data-config-id="image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-bottom w-full text-gray-900">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="svg-inline8"
          >
            <path
              d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
      <div
        data-section-id="7"
        data-share="custom-155382"
        data-category="numbers-gray-mix"
        data-component-id="f95f4658_01_awz"
        data-custom-component-id="155382"
        class="bg-white"
      >
        <div class="wave-top w-full text-gray-600 ">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="svg-inline1"
          >
            <path
              d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <section class="py-20 xl:py-24 bg-gray-600">
          <div class="container px-4 mx-auto">
            <div class="flex flex-wrap justify-center text-center -mx-4">
              <div class="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2
                  class="mb-2 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter"
                  data-config-id="text3"
                >
                  10 000
                </h2>
                <p
                  class="text-lg md:text-xl text-white font-sans font-medium"
                  data-config-id="text7"
                >
                  Patients treated
                </p>
              </div>
              <div class="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2
                  class="mb-2 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tighter"
                  data-config-id="text4"
                >
                  89%
                </h2>
                <p
                  class="text-lg md:text-xl text-white font-medium font-sans"
                  data-config-id="text8"
                >
                  Sucess rate
                </p>
              </div>
              <div class="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2
                  class="mb-2 font-extrabold  text-4xl md:text-5xl text-gray-900 tracking-tighter"
                  data-config-id="text5"
                >
                  30
                </h2>
                <p
                  class="text-lg md:text-xl text-white font-medium"
                  data-config-id="text9"
                >
                  Doctors
                </p>
              </div>
              <div class="w-full md:w-1/3 lg:w-1/4 px-4">
                <h2
                  class="mb-2 font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tighter"
                  data-config-id="text6"
                >
                  6
                </h2>
                <p
                  class="text-lg md:text-xl text-white font-medium"
                  data-config-id="text10"
                >
                  Types of treatment
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="wave-bottom w-full text-gray-600">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="svg-inline2"
          >
            <path
              d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section
        data-section-id="3"
        data-share="custom-155384"
        data-category="features-white-pattern"
        data-component-id="79798086_06_awz"
        data-custom-component-id="155384"
        class="py-24 md:pb-28 bg-white overflow-hidden"
      >
        <div class="container px-4 mx-auto">
          <div class="md:max-w-4xl mx-auto mb-16 md:mb-20 text-center">
            <span
              class="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm"
              data-config-id="text15"
            >
              Get well with us
            </span>
            <h1
              class="mb-4 text-3xl md:text-4xl leading-tight text-gray-900 font-bold tracking-tighter"
              data-config-id="text7"
            >
              Do you have a chronical weight problem that just won't go away?
            </h1>
            <p
              class="text-lg md:text-xl text-gray-500 font-medium"
              data-config-id="text11"
            >
              If so, Typical Clinic is here to help! We specialize in
              endocrinology, diabetes, weight control and other chronic
              conditions. We believe that health is the most important thing in
              the world, and we want to make sure that everyone has access to
              the best treatment possible.{" "}
            </p>
          </div>
          <div class="relative h-full flex items-center justify-center mb-8 md:mb-24 mx-auto">
            <Image
              width={400}
              height={400}
              src="https://static.shuffle.dev/uploads/files/d8/d8ed2c049579f9e8c93c7a7d085009aaa5d5b3b2/pexels-shvets-production-6975474-1.jpg"
              alt=""
              data-config-id="image3"
            />
          </div>
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline4"
                  >
                    <path
                      d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3
                  class="mb-4 text-xl md:text-2xl leading-tight font-bold"
                  data-config-id="text8"
                >
                  Diabetes
                </h3>
                <p class="text-gray-500 font-medium" data-config-id="text12">
                  We treat the physical and mental aspects of diabetes through a
                  multidisciplinary team approach
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline5"
                  >
                    <path
                      d="M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3
                  class="mb-4 text-xl md:text-2xl leading-tight font-bold"
                  data-config-id="text9"
                >
                  Endocrinology
                </h3>
                <p class="text-gray-500 font-medium" data-config-id="text13">
                  Our clinical centre of excellence provides a safe environment
                  and an excellent service for patients with chronic conditions.{" "}
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline6"
                  >
                    <path
                      d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3
                  class="mb-4 text-xl md:text-2xl leading-tight font-bold"
                  data-config-id="text10"
                >
                  Weight Control
                </h3>
                <p class="text-gray-500 font-medium" data-config-id="text14">
                  Eating healthy, working out, and eating sensibly, is one of
                  the most important things you’ll ever do to ensure a long and
                  healthy life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-section-id="5"
        data-share="custom-155386"
        data-category="cta-dark-mix"
        data-component-id="e15b97af_02_awz"
        data-custom-component-id="155386"
        class="overflow-hidden wave-top wave-bottom"
      >
        <div class="wave wave-top w-full text-gray-900">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="svg-inline4"
          >
            <path
              d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="relative py-24 bg-gray-900">
          <div class="relative container px-4 mx-auto">
            <div class="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
              <span
                class="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-50 bg-blue-500 font-medium uppercase rounded-full"
                data-config-id="text8"
              >
                Get Started
              </span>
              <h1
                class="mb-4 text-3xl md:text-4xl leading-tight text-white font-heading font-bold"
                data-config-id="text6"
              >
                Do you want to control your weight?
              </h1>
              <p
                class="mb-6 text-lg md:text-xl text-gray-400 font-heading"
                data-config-id="text7"
              >
                Everyone does. But for people with chronic conditions like
                diabetes, that's not always easy, and it can be a difficult
                process to maintain a healthy lifestyle long-term. That's where
                we come in. Our clinic specializing in diabetes and weight
                control based in London.{" "}
              </p>
              <a
                class="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                href="#"
                data-config-id="text9"
              >
                Book appointment
              </a>
            </div>
            <div class="relative flex justify-center max-w-4xl mx-auto">
              <Image
                width={450}
                height={450}
                class="relative"
                src="https://static.shuffle.dev/uploads/files/d8/d8ed2c049579f9e8c93c7a7d085009aaa5d5b3b2/towfiqu-barbhuiya-blgvpvlTGIw-unsplash.jpg"
                alt=""
                data-config-id="image3"
              />
            </div>
          </div>
        </div>
        <div class="wave wave-bottom w-full text-gray-900">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-config-id="svg-inline5"
          >
            <path
              d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
      <section
        data-section-id="6"
        data-share="custom-155388"
        data-category="faqs-white-pattern"
        data-component-id="900595cb_03_awz"
        data-custom-component-id="155388"
        class="py-24 bg-white"
      >
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-20 md:mb-0">
              <div class="max-w-md">
                <span
                  class="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium rounded-full shadow-sm"
                  data-config-id="text14"
                >
                  FAQ
                </span>
                <h2
                  class="mb-4 text-4xl md:text-5xl leading-tight text-gray-900 font-bold tracking-tighter"
                  data-config-id="text6"
                >
                  Frequently Asked Questions
                </h2>
                <p
                  class="text-lg md:text-xl text-gray-500 font-medium"
                  data-config-id="text12"
                >
                  Our experts are specially trained to help people with chronic
                  conditions like diabetes, obesity, heart disease, thyroid
                  disease, osteoporosis, high blood pressure and more.{" "}
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <a class="flex flex-wrap w-full mb-10 text-left" href="#">
                <div class="w-full md:w-auto md:pr-10 mb-2 md:mb-0">
                  <h3
                    class="mb-4 text-xl text-gray-900 font-bold"
                    data-config-id="text7"
                  >
                    What treatments do you do in your clinic?
                  </h3>
                  <p
                    class="max-w-md text-gray-500 font-medium"
                    data-config-id="text13"
                  >
                    We are giving best care that is possible with top experts in
                    each field.
                  </p>
                </div>
                <div class="ml-auto text-blue-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline1"
                  >
                    <path
                      d="M12.71 8.29C12.6149 8.19896 12.5028 8.12759 12.38 8.08C12.1365 7.97998 11.8635 7.97998 11.62 8.08C11.4972 8.12759 11.3851 8.19896 11.29 8.29L8.29 11.29C8.1017 11.4783 7.99591 11.7337 7.99591 12C7.99591 12.2663 8.1017 12.5217 8.29 12.71C8.4783 12.8983 8.7337 13.0041 9 13.0041C9.2663 13.0041 9.5217 12.8983 9.71 12.71L11 11.41L11 15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15L13 11.41L14.29 12.71C14.383 12.8037 14.4936 12.8781 14.6154 12.9289C14.7373 12.9797 14.868 13.0058 15 13.0058C15.132 13.0058 15.2627 12.9797 15.3846 12.9289C15.5064 12.8781 15.617 12.8037 15.71 12.71C15.8037 12.617 15.8781 12.5064 15.9289 12.3846C15.9797 12.2627 16.0058 12.132 16.0058 12C16.0058 11.868 15.9797 11.7373 15.9289 11.6154C15.8781 11.4936 15.8037 11.383 15.71 11.29L12.71 8.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51808 6.3459 2.7612 8.17316C2.00433 10.0004 1.80629 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.80429 19.0711 4.92893C18.1425 4.00034 17.0401 3.26375 15.8268 2.7612C14.6136 2.25865 13.3132 2 12 2ZM12 20C10.4177 20 8.87103 19.5308 7.55544 18.6518C6.23984 17.7727 5.21446 16.5233 4.60896 15.0615C4.00346 13.5997 3.84503 11.9911 4.15372 10.4393C4.4624 8.88743 5.22432 7.46196 6.34314 6.34314C7.46196 5.22432 8.88743 4.4624 10.4393 4.15371C11.9911 3.84503 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55543C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                class="flex flex-wrap w-full mb-10 text-blue-500 hover:text-blue-600 hover:underline text-left"
                href="#"
              >
                <div class="w-full md:w-auto md:pr-10 mb-2 md:mb-0">
                  <h3
                    class="text-xl text-gray-900 font-bold"
                    data-config-id="text8"
                  >
                    Are your treatments covered by NHS?
                  </h3>
                </div>
                <div class="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline2"
                  >
                    <path
                      d="M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                class="flex flex-wrap w-full mb-10 text-blue-500 hover:text-blue-600 hover:underline text-left"
                href="#"
              >
                <div class="w-full md:w-auto md:pr-10 mb-2 md:mb-0">
                  <h3
                    class="text-xl text-gray-900 font-bold"
                    data-config-id="text9"
                  >
                    Which treatment is the best for me?
                  </h3>
                </div>
                <div class="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline3"
                  >
                    <path
                      d="M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                class="flex flex-wrap w-full mb-10 text-blue-500 hover:text-blue-600 hover:underline text-left"
                href="#"
              >
                <div class="w-full md:w-auto md:pr-10 mb-2 md:mb-0">
                  <h3
                    class="text-xl text-gray-900 font-bold"
                    data-config-id="text10"
                  >
                    How do I book the appointment?
                  </h3>
                </div>
                <div class="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline4"
                  >
                    <path
                      d="M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                class="flex flex-wrap w-full text-blue-500 hover:text-blue-600 hover:underline text-left"
                href="#"
              >
                <div class="w-full md:w-auto md:pr-10 mb-2 md:mb-0">
                  <h3
                    class="text-xl text-gray-900 font-bold"
                    data-config-id="text11"
                  >
                    When I will see the results?
                  </h3>
                </div>
                <div class="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="svg-inline5"
                  >
                    <path
                      d="M11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.8635 16.02 12.1365 16.02 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L15.71 12.71C15.8983 12.5217 16.0041 12.2663 16.0041 12C16.0041 11.7337 15.8983 11.4783 15.71 11.29C15.5217 11.1017 15.2663 10.9959 15 10.9959C14.7337 10.9959 14.4783 11.1017 14.29 11.29L13 12.59L13 9C13 8.73479 12.8946 8.48043 12.7071 8.2929C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.2929C11.1054 8.48043 11 8.73479 11 9L11 12.59L9.71 11.29C9.61704 11.1963 9.50644 11.1219 9.38458 11.0711C9.26272 11.0203 9.13201 10.9942 9 10.9942C8.86799 10.9942 8.73728 11.0203 8.61542 11.0711C8.49356 11.1219 8.38296 11.1963 8.29 11.29C8.19627 11.383 8.12188 11.4936 8.07111 11.6154C8.02034 11.7373 7.9942 11.868 7.9942 12C7.9942 12.132 8.02034 12.2627 8.07111 12.3846C8.12188 12.5064 8.19627 12.617 8.29 12.71L11.29 15.71ZM12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17317 2.76121C6.3459 3.51809 4.78412 4.79981 3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7363 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22ZM12 4C13.5823 4 15.129 4.4692 16.4446 5.34825C17.7602 6.2273 18.7855 7.47673 19.391 8.93854C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569C16.538 18.7757 15.1126 19.5376 13.5607 19.8463C12.0089 20.155 10.4003 19.9965 8.93853 19.391C7.47672 18.7855 6.22729 17.7602 5.34824 16.4446C4.46919 15.129 4 13.5823 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84286 9.87827 4 12 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
