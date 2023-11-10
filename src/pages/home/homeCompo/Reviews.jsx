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
  let users = ["slman","Rahim","Mossarof","Mehidy"]
  return (
    <swiper-container init="false" ref={trendingRef}>
      {
        users.map(ele=>{
          return(
              <swiper-slide key={ele}>
        <div className="relative h-auto  w-full mx-auto md:w-10/12 lg:w-11/12 bg-white rounded flex flex-col item-start justify-center capitalize cursor-pointer text-xl font-semibold p-6 gap-4 border">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://source.unsplash.com/random/24x24/?face"
              alt=""
              className="h-12 w-12 rounded-full  border-2 border-blue-500"
            />
            <p>{ele}</p>
          </div>
          <div className="text-xl text-center md:px-16 px-6 text-gray-500 w-full md:w-4/6 mx-auto">
            <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit libero? Explicabo, dolores, aperiam doloribus similique et suscipit quidem laborum iste dicta quia accusantium nobis eius assumenda saepe commodi magnam.
            </p>
       
          </div>
          <div className="absolute bottom-0 h-12 w-full  bg-indigo-200 left-0">

          </div>
        </div>
      </swiper-slide>
          )
        })
      }
    
      
    </swiper-container>
  );
};

export default Reviews;
