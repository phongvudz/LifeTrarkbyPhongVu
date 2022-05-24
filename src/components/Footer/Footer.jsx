const Footer = () => {
  return (
    <div>
      <section className="px-[15px] py-16">
        <div>
          <div>
            <img
              src="https://demo.themefisher.com/lifetrakr/images/phones/iphone-banner.png"
              alt="mobile5"
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl text-gray-700 font-light my-8">
              Subscribe Our Newsletter
            </h1>
            <p className="text-gray-500 mb-8">
              Demoralized by the charms of pleasure of the moment, so blinded by
              desire, that they cannot foresee idea of denouncing pleasure and
              praising
            </p>
            <div className="border-transparent shadow-2xl flex  mb-8">
              <input
                type="email"
                id="email"
                class="bg-gray-50  text-gray-900 text-sm  block w-full p-2.5 outline-none rounded-l-lg"
                placeholder="Enter your email address"
                required
              />
              <button className="bg-softPurple px-6 py-4 rounded-r-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-right text-softPurple">
              Subscribe To Our Newsletter & Stay Updated
            </h1>
          </div>
        </div>
      </section>
      <footer className="bg-softPurple px-[15px] py-12">
        <div>
          <div className="text-white flex flex-col items-center text-center gap-8">
            <img
              src="https://demo.themefisher.com/lifetrakr/images/logo.png"
              alt="logo footer"
            />
            <p className="text-[15px]">
              @2017 Themefisher All Rights Reserved | Design By : Themefisher
              Team
            </p>
          </div>
          <div className="">
            <div className="">
              {" "}
              <div className="flex items-center justify-center gap-4 text-white mt-[30px] mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <div>
                  <ul className="flex items-center justify-center gap-8 uppercase text-white cursor-pointer">
                      <li>about</li>
                      <li>team</li>
                      <li>contact</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
