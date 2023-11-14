import { useEffect, useRef } from "react";


const ImageSlider = ({ data }) => {
  const trendingRef = useRef(null);
  useEffect(() => {
    const swiperEl = trendingRef.current;
    // swiper parameters

    const swiperParams = {
      slidesPerView: 1,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: true,

      injectStyles: [
        `     
            .swiper-button-next,
            .swiper-button-prev {
              opacity:0;
              background-position: center;
              background-size: 0;
              background-repeat: no-repeat;
              padding: 0;
              border-radius: 0px;
              background-color:gray;
              display:none;
            }
  
            .swiper-button-prev {
              background-image: url("/");
            }
  
            .swiper-button-next {
              background-image: url("/");
            }
            
            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: "";
            }
  
            .swiper-pagination-bullet{
              width: 20px;
              height: 8px;
              background-color: blue;
              border-radius:5px;
              transition:.5s;
            }
            .swiper-pagination-bullet-active{
              width: 30px;
              height: 10px;
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
      {
        data?.map(ele => {
          return (
            <swiper-slide key={ele}>


              <img
                src={ele}
                alt=""
                className="h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-lg object-cover"
              />




            </swiper-slide>
          )
        })
      }


    </swiper-container>
  );
};

export default ImageSlider;