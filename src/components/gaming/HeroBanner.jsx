import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../common/Button";

const BANNERS = [
  { id: 1, image: "/images/slider/aviator.png" },
  { id: 2, image: "/images/slider/bingo.png" },
  { id: 3, image: "/images/slider/blackjack.png" },
  { id: 4, image: "/images/slider/lucky-6.png" },
  { id: 5, image: "/images/slider/slot.png" },
  { id: 6, image: "/images/slider/roulette.png" },
];
const BannerDesktop = [
  { id: 1, image: "/images/banner/1.png" },
  { id: 2, image: "/images/banner/2.png" },
  { id: 3, image: "/images/banner/3.png" },
  { id: 4, image: "/images/banner/4.png" },
  { id: 5, image: "/images/banner/5.png" },
];

export const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(BANNERS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const timerRef = useRef(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      // Always show 1 banner at a time as requested
      // setItemsPerView(1);

      // If you want to use the 3-image slider again, comment out the line above
      // and uncomment the lines below:
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = BannerDesktop.length;
  // Triple array to allow seamless wrapping
  // const extendedBanners = [
  //   ...BannerDesktop,
  //   ...BannerDesktop,
  //   ...BannerDesktop,
  // ];
  const extendedBanners = [...BANNERS, ...BANNERS, ...BANNERS];

  const nextSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timerRef.current);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    // If we've scrolled to the 3rd set, jump seamlessly back to the 2nd set
    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalItems);
    }
    // If we've scrolled into the 1st set, jump seamlessly forward to the 2nd set
    else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  const itemWidthPercentage = 100 / itemsPerView;

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mt-6 mb-6 relative group">
      {/* Scroll Buttons */}
      <button
        onClick={() => {
          clearInterval(timerRef.current);
          prevSlide();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => {
          clearInterval(timerRef.current);
          nextSlide();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10 shadow-xl"
      >
        <ChevronRight size={24} />
      </button>

      <div className="w-full relative overflow-hidden">
        <div
          className={cn(
            "flex -mx-2",
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : "",
          )}
          style={{
            transform: `translateX(-${currentIndex * itemWidthPercentage}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedBanners.map((banner, index) => (
            <div
              key={`${banner.id}-${index}`}
              className="shrink-0 px-2"
              style={{ width: `${itemWidthPercentage}%` }}
            >
              {/* If you switch back to the 3-image slider, you may want to uncomment this div and remove the one below it: */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${banner.image}")` }}
                ></div>
              </div>
              {/* <div className="relative w-full aspect-[21/9] md:aspect-[4/1] lg:aspect-[5/1] xl:aspect-[6/1] max-h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${banner.image}")` }}
                ></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
