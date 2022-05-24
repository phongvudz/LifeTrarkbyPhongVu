const Content = () => {
  return (
    <div>
      <section className="bg-[url('https://demo.themefisher.com/lifetrakr/images/backgrounds/banner-bg.jpg')] bg-cover  w-full pt-44 pb-32 px-[15px]">
        <div>
          <div className="text-white">
            <h1 className="text-6xl leading-relaxed tracking-wide font-semibold mb-8">
              AMAZING APP BEST FOR BUSINESS
            </h1>
            <p className="text-xl mb-24">
              LET YOU TRACK EVERYTHING IN YOUR LIFE WITH A SIMPLE WAY
            </p>
            <div className="flex flex-col space-y-6 mb-4">
              <button className="">
                {" "}
                <img
                  src="https://demo.themefisher.com/lifetrakr/images/app-badge/google-play.png"
                  alt=" download ch play"
                />
              </button>
              <button className="">
                {" "}
                <img
                  src="https://demo.themefisher.com/lifetrakr/images/app-badge/app-store.png"
                  alt="download apple"
                />
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://demo.themefisher.com/lifetrakr/images/phones/iphone-banner.png"
              alt="mobile1"
            />
          </div>
        </div>
      </section>
      <section className="px-[15px] py-32">
        <div>
          <div>
            <img
              src="https://demo.themefisher.com/lifetrakr/images/phones/iphone-feature.png"
              alt="mobile2"
            />
          </div>
          <div>
         {/*Card1*/}
            <div className="flex flex-row  items-start gap-4 border-transparent shadow-2xl px-[20px] py-[30px] mb-8">
              <svg className="" 
                xmlns="http://www.w3.org/2000/svg"
                class=" h-36 w-36 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <div className="">
                <h1 className="text-gray-900 font-bold text-lg mb-4">CREATIVE DESIGN</h1>
                <p className="text-gray-400 ">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete accounta
                </p>
              </div>
            </div>
            {/*Card 2*/}
            <div className="flex flex-row  items-start gap-4 border-transparent shadow-2xl px-[20px] py-[30px] bg-softPurple text-white mb-8">
              <svg className="" 
                xmlns="http://www.w3.org/2000/svg"
                class=" h-36 w-36"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <div className="">
                <h1 className= "font-bold text-lg mb-4">EASY TO USE</h1>
                <p className=" ">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete accounta
                </p>
              </div>
            </div>
            {/*Card 3*/}
            <div className="flex flex-row  items-start gap-4 border-transparent shadow-2xl px-[20px] py-[30px]">
              <svg className="" 
                xmlns="http://www.w3.org/2000/svg"
                class=" h-36 w-36 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <div className="">
                <h1 className="text-gray-900 font-bold text-lg mb-4">BEST USER EXPERIENCE</h1>
                <p className="text-gray-400 ">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete accounta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Content;
