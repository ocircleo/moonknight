import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import { useRef } from "react";

register();
const Reviews = () => {
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
      <swiper-slide>
        <div className="h-72  w-full bg-white rounded flex flex-col item-start justify-center capitalize cursor-pointer text-xl font-semibold p-6 gap-4 border">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://source.unsplash.com/random/24x24/?face"
              alt=""
              className="h-12 w-12 rounded-full  border-2 border-blue-500"
            />
            <p>Md.Salman Hossain</p>
          </div>
          <p className="text-xl text-center md:px-16 px-6 text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit libero? Explicabo, dolores, aperiam doloribus similique et suscipit quidem laborum iste dicta quia accusantium nobis eius assumenda saepe commodi magnam.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72  w-full bg-white rounded flex flex-col item-start justify-center capitalize cursor-pointer text-xl font-semibold p-6 gap-4 border">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://source.unsplash.com/random/24x24/?face"
              alt=""
              className="h-12 w-12 rounded-full  border-2 border-blue-500"
            />
            <p>Md.Abdur Rahim</p>
          </div>
          <p className="text-xl text-center md:px-16 px-6 text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit libero? Explicabo, dolores, aperiam doloribus similique et suscipit quidem laborum iste dicta quia accusantium nobis eius assumenda saepe commodi magnam.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72  w-full bg-white rounded flex flex-col item-start justify-center capitalize cursor-pointer text-xl font-semibold p-6 gap-4 border">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://source.unsplash.com/random/24x24/?face"
              alt=""
              className="h-12 w-12 rounded-full  border-2 border-blue-500"
            />
            <p>Md.Mossarof Hossain</p>
          </div>
          <p className="text-xl text-center md:px-16 px-6 text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit libero? Explicabo, dolores, aperiam doloribus similique et suscipit quidem laborum iste dicta quia accusantium nobis eius assumenda saepe commodi magnam.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="h-72  w-full bg-white rounded flex flex-col item-start justify-center capitalize cursor-pointer text-xl font-semibold p-6 gap-4 border">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://source.unsplash.com/random/24x24/?face"
              alt=""
              className="h-12 w-12 rounded-full  border-2 border-blue-500"
            />
            <p>Iqbal</p>
          </div>
          <p className="text-xl text-center md:px-16 px-6 text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit libero? Explicabo, dolores, aperiam doloribus similique et suscipit quidem laborum iste dicta quia accusantium nobis eius assumenda saepe commodi magnam.
          </p>
        </div>
      </swiper-slide>
     
    </swiper-container>
  );
};

export default Reviews;
