import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import { useRef } from "react";

register();
const WelcomeSlider = () => {
  const trendingRef = useRef(null);
  useEffect(() => {
    const swiperEl = trendingRef.current;
    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      navigation: true,
      injectStyles: [
        `

          .swiper-button-next,
          .swiper-button-prev {
            opacity:.7;
            background-position: center;
            background-size: 30px;
            background-repeat: no-repeat;
            padding: 0px 8px;
            border-radius: 5px;
            background-color:gray;
          }

          .swiper-button-prev {
            background-image: url("/arrow-left.svg");
          }

          .swiper-button-next {
            background-image: url("/arrow-right.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
            display:none;
          }
          .swiper-button-next > *{
            display:none;
          }
          .swiper-button-prev > *{
            display:none;
          }
      `,
      ],
      on: {
        init() {
          // ...
        },
      },
    };
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);
    // and now initialize it
    swiperEl.initialize();
  }, []);
  return (
    <swiper-container init="false" ref={trendingRef}>
      <swiper-slide>
        <div className="h-72 md:h-80 lg:h-96 w-full bg-gray-200 rounded flex items-center justify-center capitalize cursor-pointer text-3xl font-semibold relative">
          <p className="absolute z-0">loading...</p>
          <img
            src="https://source.unsplash.com/random/624x120/?room"
            alt=""
            className="h-72 md:h-80 lg:h-96 w-full rounded z-10"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72 md:h-80 lg:h-96 w-full bg-gray-200 rounded flex items-center justify-center capitalize cursor-pointer text-3xl font-semibold">
          <img
            src="https://source.unsplash.com/random/624x120/?airbnb"
            alt=""
            className="h-72 md:h-80 lg:h-96 w-full rounded"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72 md:h-80 lg:h-96 w-full bg-gray-200 rounded flex items-center justify-center capitalize cursor-pointer text-3xl font-semibold">
          <img
            src="https://source.unsplash.com/random/624x120/?house"
            alt=""
            className="h-72 md:h-80 lg:h-96 w-full rounded"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72 md:h-80 lg:h-96 w-full bg-gray-200 rounded flex items-center justify-center capitalize cursor-pointer text-3xl font-semibold">
          <img
            src="https://source.unsplash.com/random/624x120/?bangladesh"
            alt=""
            className="h-72 md:h-80 lg:h-96 w-full rounded"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default WelcomeSlider;
