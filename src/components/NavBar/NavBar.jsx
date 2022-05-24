const NavBar = () => {
  return (
    <nav className=" bg-softPurple px-[16px] py-4 sticky top-0 left-0 shadow-lg z-10 ">
      <div class="container flex flex-wrap justify-between items-center mx-auto  ">
        <a
          href="https://demo.themefisher.com/demos/?theme=lifetrakr"
          class="flex items-center"
        >
          <img
            src="https://demo.themefisher.com/lifetrakr/images/logo.png"
            class="mr-3"
            alt="Logo"
          />
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="md:hidden text-white rounded-lg  p-3 mr-1"
          >
            <svg
              class="w-5 h-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden relative md:block">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm "
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            class="inline-flex items-center p-3  text-white rounded-lg md:hidden "
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        >
          <div class="relative mt-3 md:hidden">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm outline-none "
              placeholder="Search..."
            />
          </div>
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li class="block py-2 pr-4 pl-3 text-white md:p-0 cursor-pointer hover:text-purple-800 hover:-translate-y-1 hover:duration-500 hover:scale-125">
              Home
            </li>
            <li class="block py-2 pr-4 pl-3 text-white md:p-0 cursor-pointer hover:text-purple-800 hover:-translate-y-1 hover:duration-500 hover:scale-125">
              About
            </li>
            <li class="block py-2 pr-4 pl-3 text-white md:p-0 cursor-pointer hover:text-purple-800 hover:-translate-y-1 hover:duration-500 hover:scale-125">
              Services
            </li>
            <li class="block py-2 pr-4 pl-3 text-white md:p-0 cursor-pointer hover:text-purple-800 hover:-translate-y-1 hover:duration-500 hover:scale-125">
              Features
            </li>
            <li class="block py-2 pr-4 pl-3 text-white md:p-0 cursor-pointer hover:text-purple-800 hover:-translate-y-1 hover:duration-500 hover:scale-125">
              Services
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
