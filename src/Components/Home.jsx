import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import { toQuery, useMediaQuery } from "react-responsive";


const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
   const searchBarRef = useRef(null);
   const ctaButtonsRef = useRef(null);
   const card1Ref = useRef(null);
   const card2Ref = useRef(null);
   const card3Ref = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    const headlineSplit = new SplitText(".headline", { type: "words,chars" });
    const paragraphSplit = new SplitText(".subheadline", { type: "words,chars" });
    const stats = new SplitText(".statssection",{type:"words"})
    headlineSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    

    gsap.from(headlineSplit.chars, {
       yPercent: 200,
      duration: 3,
      ease: "expo.out",
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });

    gsap.from(paragraphSplit.chars, {
     opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: {
        amount: 0.5,
        from: "random",
      },
      delay: 1.5,
    });

    tl.fromTo(
      searchBarRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 2,
      }
    );
     tl.fromTo(
      ctaButtonsRef.current.children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      '-=0.4' // Start slightly before search bar animation ends
    );
    gsap.from(stats.words,{
       opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: {
        amount: 0.5,
        from: "random",
      },

    },'-=0.01')

    gsap.fromTo(
      cards,
      {
        x: 500,
        opacity: 0,
        rotate: 20,
        scale: 0.7,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 2,
        stagger: 1,
        ease: 'power2.inout',
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },"-=0.04"
    );


  })

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20">
      {/* Main Container */}
      <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden gap-6 lg:gap-0">
        
        {/* Left Side */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 lg:py-10">
          {/* Headline */}
          <h1 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-oswald font-bold text-gray-900 leading-tight">
            Find Your <br className="hidden sm:block" /> 
            <span className="sm:hidden">Dream Home</span>
            <span className="hidden sm:inline">Dream Home</span>
          </h1>
          
          {/* Subheadline */}
          <p className="subheadline mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-oswald text-gray-600 max-w-lg">
            Discover exclusive properties in prime locations with personalized service.
          </p>

          {/* Search Bar */}
          <div ref={searchBarRef} className="searchbar mt-6 sm:mt-8 bg-white shadow-lg rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center px-4 py-3 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Location"
              className="flex-1 border-none outline-none text-gray-700 py-2 sm:py-0 text-sm sm:text-base"
            />
            <select className="border-none outline-none text-gray-700 py-2 sm:py-0 text-sm sm:text-base">
              <option>Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Office</option>
            </select>
            <select className="border-none outline-none text-gray-700 py-2 sm:py-0 text-sm sm:text-base">
              <option>Price Range</option>
              <option>$500 - $1000</option>
              <option>$1000 - $2000</option>
              <option>$2000+</option>
            </select>
            <button className="btn-gold w-full sm:w-auto sm:flex-shrink-0 py-2 sm:py-3 text-sm sm:text-base">
              Search
            </button>
          </div>

          {/* CTAs */}
          <div  ref={ctaButtonsRef} className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="btn-gold w-full sm:w-auto text-sm sm:text-base py-3">
              Explore Properties
            </button>
            <button className="border border-gray-400 text-gray-800 px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto text-sm sm:text-base">
              Schedule a Tour
            </button>
          </div>

          {/* Stats Section */}
          <div className=" statssection mt-8 sm:mt-10 flex flex-wrap justify-between sm:justify-start gap-6 sm:gap-8 lg:gap-12 text-gray-800 font-semibold">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">500+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Properties</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">10K+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Happy Clients</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">15</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center p-4 sm:p-4 space-y-2 sm:space-y-2 relative">
          {/* Image Cards */}
          <div ref={card1Ref} className="relative w-full max-w-sm lg:max-w-none">
            <img
              src="/LuxuryVilla.jpg"
              alt="House 1"
              className="rounded-xl shadow-lg w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
            />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white shadow-md px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <p className="text-xs text-gray-500">Luxury Villa</p>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">$2.5M+</h4>
            </div>
          </div>

          <div ref={card2Ref} className="relative w-full max-w-sm lg:max-w-none">
            <img
              src="/Estate_home.jpg"
              alt="House 2"
              className="rounded-xl shadow-lg w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
            />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white shadow-md px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <p className="text-xs text-gray-500">Estate Home</p>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">$1.2M+</h4>
            </div>
          </div>

          <div ref={card3Ref} className="relative w-full max-w-sm lg:max-w-none">
            <img
              src="/mordern_appartment.jpg"
              alt="House 3"
              className="rounded-xl shadow-lg w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
            />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white shadow-md px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <p className="text-xs text-gray-500">Modern Apartment</p>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">$800K+</h4>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;